import { t as require_built } from "../_libs/ioredis+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/index.js
var import_built = require_built();
var lastCapturedError;
var TTL_MS = 5e3;
function record(error) {
	lastCapturedError = {
		error,
		at: Date.now()
	};
}
if (typeof globalThis.addEventListener === "function") {
	globalThis.addEventListener("error", (event) => record(event.error ?? event));
	globalThis.addEventListener("unhandledrejection", (event) => record(event.reason));
}
function consumeLastCapturedError() {
	if (!lastCapturedError) return void 0;
	if (Date.now() - lastCapturedError.at > TTL_MS) {
		lastCapturedError = void 0;
		return;
	}
	const { error } = lastCapturedError;
	lastCapturedError = void 0;
	return error;
}
function renderErrorPage() {
	return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var encoder = new TextEncoder();
var SESSION_COOKIE = "stl_session";
var EMAIL_COOKIE = "stl_email";
var DEFAULT_TTL_SEC = 3600 * 24 * 30;
function getSecret() {
	return process.env.SESSION_SECRET ?? "dev-insecure-secret-troque-em-producao";
}
function base64url(bytes) {
	let bin = "";
	for (const b of bytes) bin += String.fromCharCode(b);
	return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function sign(payload) {
	const key = await crypto.subtle.importKey("raw", encoder.encode(getSecret()), {
		name: "HMAC",
		hash: "SHA-256"
	}, false, ["sign"]);
	const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
	return base64url(new Uint8Array(sig));
}
async function createSessionToken(email, ttlSec = DEFAULT_TTL_SEC) {
	const exp = Date.now() + ttlSec * 1e3;
	const payload = `${base64url(encoder.encode(email.trim().toLowerCase()))}.${exp}`;
	return `${payload}.${await sign(payload)}`;
}
async function verifySessionToken(token) {
	if (!token) return null;
	const parts = token.split(".");
	if (parts.length !== 3) return null;
	const [emailB64, expStr, sig] = parts;
	if (sig !== await sign(`${emailB64}.${expStr}`)) return null;
	if (Date.now() > Number(expStr)) return null;
	try {
		const b64 = emailB64.replace(/-/g, "+").replace(/_/g, "/");
		const bin = atob(b64);
		const bytes = Uint8Array.from(bin, (ch) => ch.charCodeAt(0));
		return new TextDecoder().decode(bytes);
	} catch {
		return null;
	}
}
function readCookie(cookieHeader, name) {
	if (!cookieHeader) return void 0;
	for (const part of cookieHeader.split(";")) {
		const idx = part.indexOf("=");
		if (idx === -1) continue;
		if (part.slice(0, idx).trim() === name) return decodeURIComponent(part.slice(idx + 1).trim());
	}
}
var TTL_SEC = DEFAULT_TTL_SEC;
function getUrl() {
	const direct = process.env.REDIS_URL ?? process.env.REDIS_URI ?? process.env.REDIS_TLS_URL ?? process.env.KV_URL;
	if (direct) return direct;
	for (const value of Object.values(process.env)) if (typeof value === "string" && /^rediss?:\/\//.test(value)) return value;
	return "";
}
function isRedisConfigured() {
	return Boolean(getUrl());
}
var client = null;
function getClient() {
	const url = getUrl();
	if (!url) throw new Error("Redis não configurado: defina REDIS_URL.");
	if (!client) {
		client = new import_built.Redis(url, {
			lazyConnect: true,
			maxRetriesPerRequest: 2,
			connectTimeout: 1e4
		});
		client.on("error", (err) => console.error("[redis]", err));
	}
	return client;
}
var PAID_KEY = "paid_emails";
function normalize(email) {
	return email.trim().toLowerCase();
}
async function addPaidEmail(email) {
	await getClient().sadd(PAID_KEY, normalize(email));
}
async function removePaidEmail(email) {
	await getClient().srem(PAID_KEY, normalize(email));
}
async function isPaidEmail(email) {
	return await getClient().sismember(PAID_KEY, normalize(email)) === 1;
}
function asObject(value) {
	return typeof value === "object" && value !== null ? value : void 0;
}
function extractEmail(payload) {
	const candidates = [
		asObject(payload["customer"])?.["email"],
		payload["email"],
		payload["customer_email"],
		asObject(payload["buyer"])?.["email"],
		asObject(payload["data"])?.["email"]
	];
	for (const c of candidates) if (typeof c === "string" && c.includes("@")) return c.trim().toLowerCase();
	return null;
}
function classifyEvent(payload) {
	const event = String(payload["event"] ?? "").toLowerCase();
	const payStatus = String(asObject(payload["payment"])?.["status"] ?? payload["status"] ?? "").toLowerCase();
	if (/refund|chargeback|estorn|reembols|cancel/.test(event) || /refund|chargeback|estorn|reembols|cancel/.test(payStatus)) return "revoke";
	if (event.endsWith(".paid") || payStatus === "paid" || payStatus === "approved" || payStatus === "aprovado" || payStatus === "pago") return "grant";
	return "ignore";
}
function secretValid(request, url) {
	const expected = process.env.GGCHECKOUT_WEBHOOK_SECRET;
	if (!expected) {
		console.warn("[webhook] GGCHECKOUT_WEBHOOK_SECRET não definido — webhook sem proteção.");
		return true;
	}
	return (url.searchParams.get("secret") ?? request.headers.get("x-webhook-secret") ?? request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ?? "") === expected;
}
async function handleGgcheckoutWebhook(request) {
	if (!secretValid(request, new URL(request.url))) return Response.json({
		ok: false,
		error: "Não autorizado."
	}, { status: 401 });
	let payload;
	try {
		if ((request.headers.get("content-type") ?? "").includes("application/json")) payload = await request.json();
		else {
			const form = await request.formData();
			payload = Object.fromEntries(form.entries());
		}
	} catch {
		return Response.json({
			ok: false,
			error: "Payload inválido."
		}, { status: 400 });
	}
	console.log("[webhook] payload recebido:", JSON.stringify(payload));
	const email = extractEmail(payload);
	const action = classifyEvent(payload);
	if (!email) {
		console.error("[webhook] e-mail não encontrado no payload:", payload);
		return Response.json({
			ok: false,
			error: "E-mail ausente no payload."
		}, { status: 422 });
	}
	try {
		if (action === "grant") {
			await addPaidEmail(email);
			console.log(`[webhook] acesso liberado: ${email}`);
		} else if (action === "revoke") {
			await removePaidEmail(email);
			console.log(`[webhook] acesso removido: ${email}`);
		} else console.log(`[webhook] evento ignorado (${payload["event"]}) para ${email}`);
	} catch (error) {
		console.error(error);
		return Response.json({
			ok: false,
			error: "Erro ao gravar acesso."
		}, { status: 500 });
	}
	return Response.json({ ok: true });
}
var serverEntryPromise;
async function getServerEntry() {
	if (!serverEntryPromise) serverEntryPromise = import("./server-CCrBD8qV.mjs").then((m) => m.default ?? m);
	return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
	if (response.status < 500) return response;
	if (!(response.headers.get("content-type") ?? "").includes("application/json")) return response;
	const body = await response.clone().text();
	if (!body.includes("\"unhandled\":true") || !body.includes("\"message\":\"HTTPError\"")) return response;
	console.error(consumeLastCapturedError() ?? /* @__PURE__ */ new Error(`h3 swallowed SSR error: ${body}`));
	return new Response(renderErrorPage(), {
		status: 500,
		headers: { "content-type": "text/html; charset=utf-8" }
	});
}
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var PROTECTED_PREFIXES = ["/membros", "/modulo"];
function isSecure(request) {
	return new URL(request.url).protocol === "https:";
}
function sessionCookie(value, maxAgeSec, secure) {
	const flags = [
		`${SESSION_COOKIE}=${value}`,
		"Path=/",
		"HttpOnly",
		"SameSite=Lax",
		`Max-Age=${maxAgeSec}`
	];
	if (secure) flags.push("Secure");
	return flags.join("; ");
}
function emailCookie(value, maxAgeSec, secure) {
	const flags = [
		`${EMAIL_COOKIE}=${encodeURIComponent(value)}`,
		"Path=/",
		"SameSite=Lax",
		`Max-Age=${maxAgeSec}`
	];
	if (secure) flags.push("Secure");
	return flags.join("; ");
}
function redirect(location) {
	return new Response(null, {
		status: 302,
		headers: { location }
	});
}
async function getSessionEmail(request) {
	return verifySessionToken(readCookie(request.headers.get("cookie"), SESSION_COOKIE));
}
async function handleLogin(request) {
	let email = "";
	try {
		email = ((await request.json()).email ?? "").trim().toLowerCase();
	} catch {
		return Response.json({
			ok: false,
			error: "Requisição inválida."
		}, { status: 400 });
	}
	if (!EMAIL_RE.test(email)) return Response.json({
		ok: false,
		error: "Digite um e-mail válido."
	}, { status: 400 });
	let allowed = (process.env.ACCESS_ALLOWED_EMAILS ?? "").toLowerCase().split(",").map((s) => s.trim()).filter(Boolean).includes(email);
	if (!allowed && isRedisConfigured()) try {
		allowed = await isPaidEmail(email);
	} catch (error) {
		console.error(error);
		return Response.json({
			ok: false,
			error: "Erro ao verificar acesso. Tente novamente."
		}, { status: 503 });
	}
	if (!allowed) return Response.json({
		ok: false,
		error: "Compra não encontrada para esse e-mail."
	}, { status: 403 });
	const token = await createSessionToken(email);
	const secure = isSecure(request);
	const headers = new Headers();
	headers.append("set-cookie", sessionCookie(token, TTL_SEC, secure));
	headers.append("set-cookie", emailCookie(email, TTL_SEC, secure));
	headers.set("content-type", "application/json");
	return new Response(JSON.stringify({ ok: true }), {
		status: 200,
		headers
	});
}
function handleLogout(request) {
	const secure = isSecure(request);
	const headers = new Headers({ location: "/acesso" });
	headers.append("set-cookie", sessionCookie("", 0, secure));
	headers.append("set-cookie", emailCookie("", 0, secure));
	return new Response(null, {
		status: 302,
		headers
	});
}
async function handleGo(request) {
	if (!await getSessionEmail(request)) return redirect("/acesso");
	const url = new URL(request.url);
	const moduleId = url.searchParams.get("m") ?? "";
	const index = Number(url.searchParams.get("c"));
	if (!moduleId || Number.isNaN(index)) return new Response("Parâmetros inválidos", { status: 400 });
	const { getCategoryUrl } = await import("./modules.server-BVLJfUBY.mjs");
	const target = getCategoryUrl(moduleId, index);
	if (!target) return new Response("Não encontrado", { status: 404 });
	return redirect(target);
}
async function handleApi(request, pathname) {
	if (pathname === "/api/login" && request.method === "POST") return handleLogin(request);
	if (pathname === "/api/logout") return handleLogout(request);
	if (pathname === "/api/go" && request.method === "GET") return handleGo(request);
	if (pathname === "/api/ggcheckout" && request.method === "POST") return handleGgcheckoutWebhook(request);
	return null;
}
var server_default = { async fetch(request, env, ctx) {
	try {
		const { pathname } = new URL(request.url);
		if (pathname.startsWith("/api/")) {
			const apiResponse = await handleApi(request, pathname);
			if (apiResponse) return apiResponse;
		}
		if (PROTECTED_PREFIXES.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
			if (!await getSessionEmail(request)) return redirect("/acesso");
		}
		return await normalizeCatastrophicSsrResponse(await (await getServerEntry()).fetch(request, env, ctx));
	} catch (error) {
		console.error(error);
		return new Response(renderErrorPage(), {
			status: 500,
			headers: { "content-type": "text/html; charset=utf-8" }
		});
	}
} };
//#endregion
export { server_default as default, renderErrorPage as t };
