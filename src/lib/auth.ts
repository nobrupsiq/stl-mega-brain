// Sessão de acesso simples (client-side).
// TODO: substituir por validação real do e-mail (lista liberada / backend).
const STORAGE_KEY = "stl_access_email";

export function getAccessEmail(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setAccessEmail(email: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, email);
  } catch {
    /* ignora indisponibilidade de storage */
  }
}

export function clearAccessEmail(): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignora indisponibilidade de storage */
  }
}
