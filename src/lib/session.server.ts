// ⚠️ SOMENTE SERVIDOR. Sessão em cookie assinado (HMAC-SHA256).
// O valor guarda o e-mail + expiração e é assinado com SESSION_SECRET,
// então não pode ser forjado no cliente.

const encoder = new TextEncoder();

export const SESSION_COOKIE = "stl_session";
// Cookie auxiliar (NÃO sensível) só para exibir o e-mail no avatar/cabeçalho.
export const EMAIL_COOKIE = "stl_email";

const DEFAULT_TTL_SEC = 60 * 60 * 24 * 30; // 30 dias

function getSecret(): string {
  return (
    process.env.SESSION_SECRET ??
    // Fallback só pra dev local funcionar; em produção DEFINA SESSION_SECRET.
    "dev-insecure-secret-troque-em-producao"
  );
}

function base64url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return base64url(new Uint8Array(sig));
}

export async function createSessionToken(
  email: string,
  ttlSec: number = DEFAULT_TTL_SEC,
): Promise<string> {
  const exp = Date.now() + ttlSec * 1000;
  const emailB64 = base64url(encoder.encode(email.trim().toLowerCase()));
  const payload = `${emailB64}.${exp}`;
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

// Retorna o e-mail se o token for válido e não expirado; senão null.
export async function verifySessionToken(
  token: string | undefined,
): Promise<string | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [emailB64, expStr, sig] = parts;
  const payload = `${emailB64}.${expStr}`;
  const expected = await sign(payload);
  if (sig !== expected) return null;
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

// Lê um cookie do header "Cookie".
export function readCookie(
  cookieHeader: string | null,
  name: string,
): string | undefined {
  if (!cookieHeader) return undefined;
  for (const part of cookieHeader.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    if (key === name) return decodeURIComponent(part.slice(idx + 1).trim());
  }
  return undefined;
}

export const TTL_SEC = DEFAULT_TTL_SEC;
