import { useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink, FileText, Upload, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MembersHeader } from "@/components/MembersHeader";
import { getAccessEmail } from "@/lib/auth";
import type { PublicCategory, PublicModule } from "@/lib/modules-types";
import { getPublicModulesFn } from "@/lib/modules-data";

export const Route = createFileRoute("/modulo/$moduleId")({
  head: () => ({
    meta: [
      { title: "Módulo · STL Mega Brain" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  loader: () => getPublicModulesFn(),
  component: ModulePage,
});

function ModulePage() {
  const navigate = useNavigate();
  const { moduleId } = Route.useParams();
  const modules = Route.useLoaderData();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const stored = getAccessEmail();
    if (!stored) {
      navigate({ to: "/acesso" });
      return;
    }
    setEmail(stored);
  }, [navigate]);

  if (!email) {
    return <div className="min-h-screen bg-background" />;
  }

  const module = modules.find((m) => m.id === moduleId);

  if (!module) {
    return (
      <div className="min-h-screen bg-background">
        <MembersHeader email={email} />
        <div className="mx-auto max-w-6xl px-4 py-24 text-center">
          <h1 className="text-2xl font-bold">Módulo não encontrado</h1>
          <p className="mt-2 text-muted-foreground">
            Esse módulo não existe ou foi removido.
          </p>
          <Button asChild className="mt-6">
            <Link to="/membros">
              <ArrowLeft className="h-4 w-4" />
              Voltar para os módulos
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <MembersHeader email={email} />

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-6">
        <Link
          to="/membros"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Link>

        {/* Banner do módulo */}
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-border">
          <img
            src={module.image}
            alt={module.title}
            className="h-56 w-full object-cover sm:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
              {module.title}
            </h1>
            <span className="mt-3 inline-flex rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-primary/30">
              {module.pdf
                ? "PDF Disponível"
                : `${module.categories.length} ${
                    module.categories.length === 1 ? "categoria" : "categorias"
                  } disponíveis`}
            </span>
          </div>
        </div>

        {/* Aviso de manutenção */}
        {module.status === "manutencao_parcial" && (
          <MaintenanceNotice
            title="Manutenção parcial"
            text="Algumas categorias deste módulo estão com links do Drive sendo atualizados. As demais continuam disponíveis normalmente."
          />
        )}
        {module.status === "manutencao" && (
          <MaintenanceNotice
            title="Em manutenção"
            text="Os links deste módulo estão sendo atualizados no Google Drive. Volte em breve — estamos reorganizando o conteúdo."
          />
        )}

        {module.pdf ? (
          <PdfGuide title={module.title} pdf={module.pdf} />
        ) : (
          <>
            {/* Categorias */}
            <h2 className="mt-10 text-xl font-bold">Categorias Disponíveis</h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {module.categories.map((category, index) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  moduleId={module.id}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

function MaintenanceNotice({ title, text }: { title: string; text: string }) {
  return (
    <div className="mt-6 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4">
      <Wrench className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
      <div>
        <p className="font-semibold text-accent">{title}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function PdfGuide({ title, pdf }: { title: string; pdf: string }) {
  return (
    <div className="mt-8">
      <h2 className="flex items-center gap-2 text-xl font-bold">
        <FileText className="h-5 w-5 text-primary" />
        Pré-visualização do Guia
      </h2>

      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-card">
        <object
          data={`${pdf}#toolbar=0&navpanes=0`}
          type="application/pdf"
          className="h-[70vh] w-full"
        >
          {/* Fallback: navegador/ambiente sem visualizador de PDF embutido. */}
          <div className="flex h-[70vh] flex-col items-center justify-center gap-3 p-8 text-center">
            <FileText className="h-10 w-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Não foi possível exibir a pré-visualização aqui.
            </p>
            <Button asChild variant="outline">
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Abrir o PDF em nova aba
              </a>
            </Button>
          </div>
        </object>
      </div>

      <div className="mt-6 flex justify-center">
        <Button asChild size="lg">
          <a href={pdf} target="_blank" rel="noopener noreferrer" download>
            <Download className="h-4 w-4" />
            Baixar PDF Completo
          </a>
        </Button>
      </div>
    </div>
  );
}

function CategoryCard({
  category,
  moduleId,
  index,
}: {
  category: PublicCategory;
  moduleId: string;
  index: number;
}) {
  return (
    <div className="flex flex-col rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Upload className="h-5 w-5" />
        </span>
        <h3 className="text-base font-bold uppercase tracking-wide">
          {category.name}
        </h3>
      </div>

      <div className="mt-5 space-y-3">
        {category.maintenance || !category.hasLink ? (
          <div className="rounded-md border border-border bg-secondary/40 px-4 py-3 text-center">
            <p className="flex items-center justify-center gap-1.5 text-sm font-medium text-foreground">
              <Wrench className="h-4 w-4" />
              Em manutenção
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Link sendo atualizado no Drive
            </p>
          </div>
        ) : (
          <Button asChild className="w-full">
            {/* O link real do Drive é resolvido no servidor (/api/go) só p/ quem tem sessão. */}
            <a
              href={`/api/go?m=${encodeURIComponent(moduleId)}&c=${index}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}
