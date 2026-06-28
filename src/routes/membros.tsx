import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Check, RefreshCw, Search, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MembersHeader } from "@/components/MembersHeader";
import { getAccessEmail } from "@/lib/auth";
import { STATUS_BADGE, type PublicModule } from "@/lib/modules-types";
import { getPublicModulesFn } from "@/lib/modules-data";

export const Route = createFileRoute("/membros")({
  head: () => ({
    meta: [
      { title: "Área de Membros · STL Mega Brain" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  loader: () => getPublicModulesFn(),
  component: MembersPage,
});

function MembersPage() {
  const navigate = useNavigate();
  const modules = Route.useLoaderData();
  const [email, setEmail] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  // O acesso já é garantido pelo servidor (gate em src/server.ts). Aqui só lemos
  // o e-mail pra exibir; se faltar (navegação client-side), voltamos pro login.
  useEffect(() => {
    const stored = getAccessEmail();
    if (!stored) {
      navigate({ to: "/acesso" });
      return;
    }
    setEmail(stored);
  }, [navigate]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return modules;
    return modules.filter(
      (m) =>
        m.title.toLowerCase().includes(q) ||
        m.subtitle.toLowerCase().includes(q),
    );
  }, [query, modules]);

  function handleRefresh() {
    setRefreshing(true);
    navigate({ to: "/membros" }).finally(() => {
      setTimeout(() => setRefreshing(false), 600);
    });
  }

  if (!email) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div className="min-h-screen bg-background">
      <MembersHeader email={email} />

      {/* Hero */}
      <section className="px-4 pt-14 pb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          90 MIL MODELOS 3D
        </h1>
        <p className="mt-3 text-base text-muted-foreground sm:text-lg">
          Acesse todos os módulos e comece a imprimir agora mesmo
        </p>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" onClick={handleRefresh} disabled={refreshing}>
            <RefreshCw className={refreshing ? "h-4 w-4 animate-spin" : "h-4 w-4"} />
            Atualizar Acessos
          </Button>
        </div>

        <div className="mx-auto mt-8 max-w-xl">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar módulos ou categorias..."
              className="h-12 pl-10"
            />
          </div>
        </div>
      </section>

      {/* Grid de módulos */}
      <main className="mx-auto max-w-6xl px-4 pb-20">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">
            Nenhum módulo encontrado para "{query}".
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => (
              <ModuleCard key={m.id} module={m} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function ModuleCard({ module: m }: { module: PublicModule }) {
  const badge = m.status === "ok" ? null : STATUS_BADGE[m.status];

  return (
    <Link
      to="/modulo/$moduleId"
      params={{ moduleId: m.id }}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
    >
      <div className="relative">
        <img
          src={m.image}
          alt={m.title}
          loading="lazy"
          className="h-44 w-full object-cover"
        />
        {badge && (
          <span
            className={`absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badge.className}`}
          >
            <Wrench className="h-3 w-3" />
            {badge.label}
          </span>
        )}
        <span className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
          <Check className="h-4 w-4" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug">{m.title}</h3>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-sm text-muted-foreground">{m.subtitle}</span>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Acessar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
