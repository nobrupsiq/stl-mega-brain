import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  EMAIL_COOKIE,
  SESSION_COOKIE,
  TTL_SEC,
  createSessionToken,
  readCookie,
  verifySessionToken,
} from "./lib/session.server";
import { isRedisConfigured, isPaidEmail } from "./lib/redis.server";
import { handleGgcheckoutWebhook } from "./server/webhook";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Rotas que exigem sessão válida (carregamento de página via SSR).
const PROTECTED_PREFIXES = ["/membros", "/modulo"];

function isSecure(request: Request): boolean {
  return new URL(request.url).protocol === "https:";
}

function sessionCookie(value: string, maxAgeSec: number, secure: boolean): string {
  const flags = [
    `${SESSION_COOKIE}=${value}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Lax",
    `Max-Age=${maxAgeSec}`,
  ];
  if (secure) flags.push("Secure");
  return flags.join("; ");
}

function emailCookie(value: string, maxAgeSec: number, secure: boolean): string {
  // Sem HttpOnly de propósito: o cliente lê só pra exibir o e-mail.
  const flags = [
    `${EMAIL_COOKIE}=${encodeURIComponent(value)}`,
    "Path=/",
    "SameSite=Lax",
    `Max-Age=${maxAgeSec}`,
  ];
  if (secure) flags.push("Secure");
  return flags.join("; ");
}

function redirect(location: string): Response {
  return new Response(null, { status: 302, headers: { location } });
}

async function getSessionEmail(request: Request): Promise<string | null> {
  const token = readCookie(request.headers.get("cookie"), SESSION_COOKIE);
  return verifySessionToken(token);
}

// POST /api/login  { email }  → cria sessão se o e-mail tiver pago.
async function handleLogin(request: Request): Promise<Response> {
  let email = "";
  try {
    const body = (await request.json()) as { email?: string };
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return Response.json({ ok: false, error: "Requisição inválida." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return Response.json({ ok: false, error: "Digite um e-mail válido." }, { status: 400 });
  }

  let allowed = false;
  if (isRedisConfigured()) {
    try {
      allowed = await isPaidEmail(email);
    } catch (error) {
      console.error(error);
      return Response.json(
        { ok: false, error: "Erro ao verificar acesso. Tente novamente." },
        { status: 503 },
      );
    }
  } else if (process.env.NODE_ENV !== "production") {
    // DEV: sem Upstash configurado, libera qualquer e-mail válido pra testar a UI.
    console.warn("[acesso] Upstash não configurado — liberando em modo DEV.");
    allowed = true;
  }

  if (!allowed) {
    return Response.json(
      { ok: false, error: "Compra não encontrada para esse e-mail." },
      { status: 403 },
    );
  }

  const token = await createSessionToken(email);
  const secure = isSecure(request);
  const headers = new Headers();
  headers.append("set-cookie", sessionCookie(token, TTL_SEC, secure));
  headers.append("set-cookie", emailCookie(email, TTL_SEC, secure));
  headers.set("content-type", "application/json");
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
}

// /api/logout → limpa cookies e volta pro /acesso.
function handleLogout(request: Request): Response {
  const secure = isSecure(request);
  const headers = new Headers({ location: "/acesso" });
  headers.append("set-cookie", sessionCookie("", 0, secure));
  headers.append("set-cookie", emailCookie("", 0, secure));
  return new Response(null, { status: 302, headers });
}

// GET /api/go?m=<moduleId>&c=<categoryIndex> → redireciona pro Drive (se autenticado).
async function handleGo(request: Request): Promise<Response> {
  const email = await getSessionEmail(request);
  if (!email) return redirect("/acesso");

  const url = new URL(request.url);
  const moduleId = url.searchParams.get("m") ?? "";
  const index = Number(url.searchParams.get("c"));
  if (!moduleId || Number.isNaN(index)) {
    return new Response("Parâmetros inválidos", { status: 400 });
  }

  const { getCategoryUrl } = await import("./lib/modules.server");
  const target = getCategoryUrl(moduleId, index);
  if (!target) return new Response("Não encontrado", { status: 404 });
  return redirect(target);
}

async function handleApi(request: Request, pathname: string): Promise<Response | null> {
  if (pathname === "/api/login" && request.method === "POST") {
    return handleLogin(request);
  }
  if (pathname === "/api/logout") {
    return handleLogout(request);
  }
  if (pathname === "/api/go" && request.method === "GET") {
    return handleGo(request);
  }
  if (pathname === "/api/ggcheckout" && request.method === "POST") {
    return handleGgcheckoutWebhook(request);
  }
  return null;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const { pathname } = new URL(request.url);

      // 1) Endpoints próprios (/api/*).
      if (pathname.startsWith("/api/")) {
        const apiResponse = await handleApi(request, pathname);
        if (apiResponse) return apiResponse;
      }

      // 2) Gate das páginas protegidas (SSR).
      if (PROTECTED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
        const email = await getSessionEmail(request);
        if (!email) return redirect("/acesso");
      }

      // 3) Demais requisições → SSR do TanStack Start.
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
