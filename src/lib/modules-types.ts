// Tipos e metadados SEGUROS para o cliente (sem os links do Drive).
// Os links reais ficam só em modules.server.ts e são resolvidos por /api/go.

export type ModuleStatus = "ok" | "andamento" | "manutencao_parcial" | "manutencao";

export type PublicCategory = {
  name: string;
  // true = "Em manutenção" (sem botão ativo).
  maintenance: boolean;
  // true = categoria tem link liberado (renderiza botão "Acessar").
  hasLink: boolean;
};

export type PublicModule = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  status: ModuleStatus;
  // Módulo do tipo guia em PDF (caminho do arquivo estático em /public).
  pdf?: string;
  categories: PublicCategory[];
};

export const STATUS_BADGE: Record<
  Exclude<ModuleStatus, "ok">,
  { label: string; className: string }
> = {
  andamento: {
    label: "EM ANDAMENTO",
    className: "bg-accent text-accent-foreground",
  },
  manutencao_parcial: {
    label: "MANUTENÇÃO PARCIAL",
    className: "bg-secondary text-secondary-foreground",
  },
  manutencao: {
    label: "EM MANUTENÇÃO",
    className: "bg-secondary text-secondary-foreground",
  },
};
