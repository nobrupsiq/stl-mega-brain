import { useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Boxes, Loader2, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { setAccessEmail } from "@/lib/auth";

export const Route = createFileRoute("/acesso")({
  head: () => ({
    meta: [
      { title: "Acesso à Área de Membros · STL Mega Brain" },
      { name: "description", content: "Área de acesso exclusiva para clientes do Pack STL." },
      // Evita que a página de acesso seja indexada por buscadores.
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AccessPage,
});

function AccessPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const value = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Digite um e-mail válido.");
      return;
    }

    setLoading(true);
    try {
      // TODO: validar o e-mail (lista liberada / backend) antes de liberar.
      // Por enquanto qualquer e-mail válido entra na área de membros.
      await new Promise((resolve) => setTimeout(resolve, 500));
      setAccessEmail(value);
      navigate({ to: "/membros" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero px-4 py-12">
      {/* Brilhos decorativos no fundo, usando as cores do site */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        <div className="rounded-2xl border border-border bg-card/80 p-8 shadow-glow backdrop-blur-sm sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30">
              <Boxes className="h-7 w-7 text-primary" />
            </div>

            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-gradient-primary">STL MEGA BRAIN</span>
            </h1>
            <h2 className="mt-3 text-xl font-semibold text-foreground">
              Acesso à Área de Membros
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Faça login usando o mesmo e-mail utilizado na hora da compra.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                E-mail
              </Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                  className="h-11 pl-9"
                />
              </div>
            </div>

            {error && (
              <p className="text-sm text-destructive" role="alert">
                {error}
              </p>
            )}

            <Button
              type="submit"
              size="lg"
              disabled={loading}
              className="h-11 w-full text-base font-semibold"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Entrando...
                </>
              ) : (
                "ENTRAR"
              )}
            </Button>
          </form>

          <p className="mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" />
            Acesso exclusivo para clientes.
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Qualquer dúvida, envie um e-mail para{" "}
          <a
            href="mailto:ultimatepackstl@gmail.com"
            className="text-primary hover:underline"
          >
            ultimatepackstl@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
