// ⚠️ SOMENTE SERVIDOR. Cliente Redis (protocolo padrão via connection string).
// Funciona com Redis Cloud e Upstash — ambos injetam uma URL `redis://...`.
//
// Variável de ambiente (a integração Redis da Vercel injeta automaticamente):
//   REDIS_URL  (aceita também REDIS_URI / KV_URL / REDIS_TLS_URL como fallback)

import { Redis } from "ioredis";

function getUrl(): string {
  const direct =
    process.env.REDIS_URL ??
    process.env.REDIS_URI ??
    process.env.REDIS_TLS_URL ??
    process.env.KV_URL;
  if (direct) return direct;
  // Fallback: acha qualquer env var que pareça uma connection string Redis
  // (caso a integração tenha injetado com outro nome).
  for (const value of Object.values(process.env)) {
    if (typeof value === "string" && /^rediss?:\/\//.test(value)) return value;
  }
  return "";
}

export function isRedisConfigured(): boolean {
  return Boolean(getUrl());
}

let client: Redis | null = null;

function getClient(): Redis {
  const url = getUrl();
  if (!url) {
    throw new Error("Redis não configurado: defina REDIS_URL.");
  }
  if (!client) {
    client = new Redis(url, {
      // Conecta sob demanda (não no load do módulo) e não trava a requisição.
      lazyConnect: true,
      maxRetriesPerRequest: 2,
      connectTimeout: 10000,
    });
    client.on("error", (err) => console.error("[redis]", err));
  }
  return client;
}

const PAID_KEY = "paid_emails";

function normalize(email: string): string {
  return email.trim().toLowerCase();
}

export async function addPaidEmail(email: string): Promise<void> {
  await getClient().sadd(PAID_KEY, normalize(email));
}

export async function removePaidEmail(email: string): Promise<void> {
  await getClient().srem(PAID_KEY, normalize(email));
}

export async function isPaidEmail(email: string): Promise<boolean> {
  const result = await getClient().sismember(PAID_KEY, normalize(email));
  return result === 1;
}
