// ⚠️ SOMENTE SERVIDOR. Cliente mínimo do Upstash Redis via REST (fetch).
// Variáveis de ambiente (a integração Upstash da Vercel injeta uma destas):
//   UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN
//   (fallback) KV_REST_API_URL / KV_REST_API_TOKEN

function getConfig() {
  const url =
    process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL ?? "";
  const token =
    process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN ?? "";
  return { url, token };
}

export function isRedisConfigured(): boolean {
  const { url, token } = getConfig();
  return Boolean(url && token);
}

async function command<T = unknown>(args: (string | number)[]): Promise<T> {
  const { url, token } = getConfig();
  if (!url || !token) {
    throw new Error(
      "Upstash não configurado: defina UPSTASH_REDIS_REST_URL e UPSTASH_REDIS_REST_TOKEN.",
    );
  }
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(args),
  });
  if (!res.ok) {
    throw new Error(`Upstash erro ${res.status}: ${await res.text()}`);
  }
  const data = (await res.json()) as { result: T; error?: string };
  if (data.error) throw new Error(`Upstash: ${data.error}`);
  return data.result;
}

const PAID_KEY = "paid_emails";

function normalize(email: string): string {
  return email.trim().toLowerCase();
}

export async function addPaidEmail(email: string): Promise<void> {
  await command(["SADD", PAID_KEY, normalize(email)]);
}

export async function removePaidEmail(email: string): Promise<void> {
  await command(["SREM", PAID_KEY, normalize(email)]);
}

export async function isPaidEmail(email: string): Promise<boolean> {
  const result = await command<number>(["SISMEMBER", PAID_KEY, normalize(email)]);
  return result === 1;
}
