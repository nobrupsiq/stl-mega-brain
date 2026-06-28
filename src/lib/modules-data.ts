import { createServerFn } from "@tanstack/react-start";
import type { PublicModule } from "@/lib/modules-types";

// Entrega ao cliente apenas os metadados (sem nenhum link do Drive).
// O import de modules.server.ts é dinâmico dentro do handler para garantir
// que esse arquivo (com as URLs) nunca seja incluído no bundle do cliente.
export const getPublicModulesFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<PublicModule[]> => {
    const { getPublicModules } = await import("@/lib/modules.server");
    return getPublicModules();
  },
);
