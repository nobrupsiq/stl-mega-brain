// Helper de cliente: lê o e-mail logado do cookie (apenas para exibição).
// A autenticação de verdade é o cookie de sessão assinado (HttpOnly), validado
// no servidor — ver src/server.ts e src/lib/session.server.ts.
const EMAIL_COOKIE = "stl_email";

export function getAccessEmail(): string | null {
  if (typeof document === "undefined") return null;
  for (const part of document.cookie.split(";")) {
    const idx = part.indexOf("=");
    if (idx === -1) continue;
    const key = part.slice(0, idx).trim();
    if (key === EMAIL_COOKIE) {
      return decodeURIComponent(part.slice(idx + 1).trim());
    }
  }
  return null;
}
