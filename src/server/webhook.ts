// ⚠️ SOMENTE SERVIDOR. Webhook da GGCheckout: grava o e-mail do comprador
// na lista de pagos quando a venda é aprovada, e remove em reembolso/chargeback.
//
// TODO (ajustar quando você tiver a doc/painel da GGCheckout):
//   1. GGCHECKOUT_WEBHOOK_SECRET — segredo pra validar que o POST veio da GGCheckout.
//      (configure o mesmo valor no painel da GGCheckout e nas env vars da Vercel)
//   2. Os nomes dos campos do payload (email e status) — ver EXTRACTORS abaixo.

import { addPaidEmail, removePaidEmail } from "../lib/redis.server";

function asObject(value: unknown): Record<string, unknown> | undefined {
  return typeof value === "object" && value !== null
    ? (value as Record<string, unknown>)
    : undefined;
}

// Formato GGCheckout: customer.email. Mantém fallbacks p/ outros formatos.
function extractEmail(payload: Record<string, unknown>): string | null {
  const candidates = [
    asObject(payload["customer"])?.["email"],
    payload["email"],
    payload["customer_email"],
    asObject(payload["buyer"])?.["email"],
    asObject(payload["data"])?.["email"],
  ];
  for (const c of candidates) {
    if (typeof c === "string" && c.includes("@")) return c.trim().toLowerCase();
  }
  return null;
}

// Classifica o evento da GGCheckout: liberar acesso, remover, ou ignorar.
// Aprovados: event "pix.paid"/"card.paid" (termina em ".paid") ou payment.status "paid".
// Removidos: eventos de reembolso/chargeback/cancelamento.
function classifyEvent(payload: Record<string, unknown>): "grant" | "revoke" | "ignore" {
  const event = String(payload["event"] ?? "").toLowerCase();
  const payStatus = String(
    asObject(payload["payment"])?.["status"] ?? payload["status"] ?? "",
  ).toLowerCase();

  if (/refund|chargeback|estorn|reembols|cancel/.test(event) || /refund|chargeback|estorn|reembols|cancel/.test(payStatus)) {
    return "revoke";
  }
  if (event.endsWith(".paid") || payStatus === "paid" || payStatus === "approved" || payStatus === "aprovado" || payStatus === "pago") {
    return "grant";
  }
  return "ignore";
}

function secretValid(request: Request, url: URL): boolean {
  const expected = process.env.GGCHECKOUT_WEBHOOK_SECRET;
  // Se não há segredo definido, não bloqueia (modo scaffold) — mas avisa.
  if (!expected) {
    console.warn("[webhook] GGCHECKOUT_WEBHOOK_SECRET não definido — webhook sem proteção.");
    return true;
  }
  const provided =
    url.searchParams.get("secret") ??
    request.headers.get("x-webhook-secret") ??
    request.headers.get("authorization")?.replace(/^Bearer\s+/i, "") ??
    "";
  return provided === expected;
}

export async function handleGgcheckoutWebhook(request: Request): Promise<Response> {
  const url = new URL(request.url);

  if (!secretValid(request, url)) {
    return Response.json({ ok: false, error: "Não autorizado." }, { status: 401 });
  }

  let payload: Record<string, unknown>;
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (contentType.includes("application/json")) {
      payload = (await request.json()) as Record<string, unknown>;
    } else {
      // form-urlencoded
      const form = await request.formData();
      payload = Object.fromEntries(form.entries());
    }
  } catch {
    return Response.json({ ok: false, error: "Payload inválido." }, { status: 400 });
  }

  // Loga o payload bruto SEMPRE — assim o primeiro evento real/teste já revela
  // o formato exato da GGCheckout e podemos ajustar os campos com precisão.
  console.log("[webhook] payload recebido:", JSON.stringify(payload));

  const email = extractEmail(payload);
  const action = classifyEvent(payload);

  if (!email) {
    console.error("[webhook] e-mail não encontrado no payload:", payload);
    return Response.json({ ok: false, error: "E-mail ausente no payload." }, { status: 422 });
  }

  try {
    if (action === "grant") {
      await addPaidEmail(email);
      console.log(`[webhook] acesso liberado: ${email}`);
    } else if (action === "revoke") {
      await removePaidEmail(email);
      console.log(`[webhook] acesso removido: ${email}`);
    } else {
      console.log(`[webhook] evento ignorado (${payload["event"]}) para ${email}`);
    }
  } catch (error) {
    console.error(error);
    return Response.json({ ok: false, error: "Erro ao gravar acesso." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
