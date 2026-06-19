import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pack STL Definitivo · +90 mil arquivos para impressão 3D por R$29,90" },
      { name: "description", content: "Mais de 90 mil arquivos STL testados e organizados por nicho. Pack com 2 bônus exclusivos por R$29,90. Acesso imediato." },
      { property: "og:title", content: "Pack STL Definitivo · +90 mil arquivos 3D" },
      { property: "og:description", content: "Transforme sua impressora 3D em uma máquina de lucro. Pack + 2 bônus por R$29,90." },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
