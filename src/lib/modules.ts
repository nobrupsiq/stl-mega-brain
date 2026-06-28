// Catálogo de módulos da área de membros.
// TODO: trocar os href "#" pelos links reais de cada categoria.

export type ModuleStatus = "ok" | "andamento" | "manutencao_parcial" | "manutencao";

export type CategoryLink = {
  label: string;
  href: string;
};

export type Category = {
  name: string;
  links: CategoryLink[];
  // Categoria com link sendo atualizado no Drive (sem botão ativo).
  maintenance?: boolean;
};

export type Module = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  status: ModuleStatus;
  categories: Category[];
  // Módulo do tipo guia em PDF (pré-visualização + download) em vez de categorias.
  pdf?: string;
};

// Helper: categoria com um único link ("Acessar").
function link(name: string, href: string): Category {
  return { name, links: [{ label: "Acessar", href }] };
}

// Helper: categoria em manutenção (link sendo atualizado no Drive).
function soon(name: string): Category {
  return { name, links: [], maintenance: true };
}

// Helper: gera categorias com Link 01 / Link 02 placeholders.
function cat(name: string, links: number = 2): Category {
  return {
    name,
    links: Array.from({ length: links }, (_, i) => ({
      label: `Link ${String(i + 1).padStart(2, "0")}`,
      href: "#",
    })),
  };
}

export const MODULES: Module[] = [
  {
    id: "mega-pack",
    title: "+90 Mil Modelos 3D",
    subtitle: "19 categorias",
    image: "/logo-megabrain.png",
    status: "ok",
    categories: [
      link("Armas", "https://drive.google.com/drive/folders/1TMbZCJffrUI0GKmDHwj-8Pgvjb7paFxF"),
      link("Chibis", "https://drive.google.com/drive/folders/1v1JHiMbE8JFwIkmCI2aLKlnDxGwD6D_N"),
      link("Religião", "https://drive.google.com/drive/folders/14nLnWtrL1cnJLcIV1xcwc0Rehxp6bzWD"),
      link("Mitologia", "https://drive.google.com/drive/folders/1euKsVcW6BuXK1XimljiM0oeXan1Spkey"),
      link("Soldados", "https://drive.google.com/drive/folders/1fhLf6VVuH3VwgZq0EHLD7WczKxQbpUOr"),
      link("Utensílios", "https://drive.google.com/drive/folders/10dV0-82opQyBdgAJkwZ-PiI8XCdW4s7a"),
      link("Decoração Pet", "https://drive.google.com/drive/folders/1LuA1mOMl1PfeCdPGpYZKO0ilEZ5CKlSY"),
      link("RPGs", "https://drive.google.com/drive/folders/1_m41NbX1Egds3axAfIQhkfPJjM3SwaZP"),
      link("Vasos de Planta", "https://drive.google.com/drive/folders/1RHE32dUp-L4h7d5KlOjE07abXhtS0jLP"),
      link("Miniaturas", "https://drive.google.com/drive/folders/1Micxz6i0i6kEVuue8Ha_b3Sr7zNLKfJj"),
      link("Cosplay", "https://drive.google.com/drive/folders/1sYd7S-fIfUN1kpE7qvxstUVoj0m_DKLz"),
      link("Games", "https://drive.google.com/drive/folders/1vqRv1-4xkiaf583-WKqWBg-EAsyNviro"),
      link("Animes - Naruto", "https://drive.google.com/drive/folders/1ChDou43EWqaU0wloTnACD8rUErTaPZhD"),
      link("Animes - One Piece", "https://drive.google.com/drive/folders/1KyoIKGqLxY8a3H_s8OaBz_DAGm-aXo9V"),
      link("Animes - Dragon Ball", "https://drive.google.com/drive/folders/1N9RjA7Z8x4r_rlVCFpP6XAvi7bjjB3Nh"),
      link("Animes - Attack on Titan", "https://drive.google.com/drive/folders/1JPd2P8hJXkoRHC4cYl_MNLDXGkb2AcNR"),
      link("Animes - Demon Slayer", "https://drive.google.com/drive/folders/1crKk1vc-EAOOnXbWGj6InCF1RPOnNWbA"),
      link("Animes - Pack 01", "https://drive.google.com/drive/folders/1uPiQgI3sq3izeMFFlTkG4wDz69H0KmVw"),
      link("Animes - Pack 02", "https://drive.google.com/drive/folders/1NOz5K0FAGurD9Evotfsqn7e-E58GtSIu"),
    ],
  },
  {
    id: "preview",
    title: "Modelos com Pré-visualização",
    subtitle: "Atualização contínua",
    image: "/pacote-articulados.jpg",
    status: "andamento",
    categories: [cat("Modelos com pré-visualização")],
  },
  {
    id: "copa-2026",
    title: "Copa do Mundo 2026",
    subtitle: "1 categoria",
    image: "/pacote-copa-do-mundo.webp",
    status: "ok",
    categories: [
      link("Copa do Mundo 2026", "https://drive.google.com/drive/folders/1wtyF-KgKQ8RGbTtwfVWnKg1wwGDZuHrJ"),
    ],
  },
  {
    id: "veiculos",
    title: "Pack de Veículos 3D",
    subtitle: "9 categorias",
    image: "/pacote-de-veiculos.webp",
    status: "ok",
    categories: [
      link("Carros 1", "https://drive.google.com/drive/folders/1s7-9_YVy_LuS-galrP1mNVeYp735GnqQ"),
      link("Carros 2", "https://drive.google.com/drive/folders/1Ij9v963mRgQmKqKx1k9296ZYrc_VTG4f"),
      link("Aviões", "https://drive.google.com/drive/folders/1AkHfMkpfr3N2dpf4Zb00H5_eL3e5LI4N"),
      link("Jatos", "https://drive.google.com/drive/folders/1vIADm21QvhwsyJf0U6zpMwl2wzjAXiOb"),
      link("Helicópteros", "https://drive.google.com/drive/folders/1ckoDmpMmktDSW4xnO-EfbVhPgjEYUXPx"),
      link("Trens", "https://drive.google.com/drive/folders/1tBzTcUn7ALTuZlhxcLaEMflHf_lV3Pc0"),
      link("Caminhões", "https://drive.google.com/drive/folders/12aPiAgd4KLgayUzv4cLTN0wDjIcMsDZv"),
      link("Barcos", "https://drive.google.com/drive/folders/1XHboxigQf_1OifqZzWiE7j3SToRd3C_E"),
      link("Tanks", "https://drive.google.com/drive/folders/1uDgT2zE94V1s08nb6brGZmTkbWfpHtXJ"),
    ],
  },
  {
    id: "marvel",
    title: "Heróis da Marvel",
    subtitle: "2 categorias",
    image: "/pacote-herois-da-marvel.webp",
    status: "manutencao_parcial",
    categories: [
      link("Pack Marvel 01", "https://drive.google.com/drive/folders/17g2yCPak1kuZWEabZPvkLDatX0g2ipft"),
      link("Pack Marvel 02", "https://drive.google.com/drive/folders/1utqBNPeqvOx_QVb5wjGs1DBStzSULsAk"),
    ],
  },
  {
    id: "pokemon",
    title: "Coleção Pokémon",
    subtitle: "4 categorias",
    image: "/pacote-pokemon.webp",
    status: "manutencao",
    categories: [
      link("Geração 1", "https://drive.google.com/drive/folders/1GbL3HUWAVo1wRmxFKR4Yyv_eO3gWpW1S"),
      link("Geração 2", "https://drive.google.com/drive/folders/1zhcF-OuiwGbsH93p180J4ZhmmLF0NqmA"),
      link("Geração 3", "https://drive.google.com/drive/folders/1wLUCqQZMt2uMUJj_pn31Qflns8ybqm0M"),
      link("Geração 4", "https://drive.google.com/drive/folders/1AbtOC6nvDcPKO2LcD8I-1E6vhpWSVbhz"),
    ],
  },
  {
    id: "chaveiros",
    title: "Chaveiros Personalizados",
    subtitle: "1 categoria",
    image: "/pack-chaveiro.webp",
    status: "manutencao",
    categories: [
      link("Pack 01", "https://drive.google.com/file/d/14pwIzlvshO2Ap8-jFvYLF_FBNuY1Jp_I/view"),
    ],
  },
  {
    id: "utensilios",
    title: "Pack de Utensílios Domésticos",
    subtitle: "7 categorias",
    image: "/pack-utensilios-domesticos.png",
    status: "manutencao_parcial",
    categories: [
      soon("Organizadores"),
      soon("Suporte Headset"),
      link("Porta Chaves", "https://drive.google.com/drive/folders/1mYsSQFhfCb5-SBP0F-SaDGHY1arrNy1M"),
      soon("Vasos"),
      soon("Vasos de Planta"),
      soon("Luminárias"),
      link("Pack de Utensílios", "https://drive.google.com/drive/folders/1hZG57HIXgWVGOm5biMt7CI2ElUGpAYlm"),
    ],
  },
  {
    id: "mascaras",
    title: "Coleção de Máscaras 3D",
    subtitle: "6 categorias",
    image: "/colecao-mascaras-3d.webp",
    status: "manutencao",
    categories: [
      soon("Máscara Huntress"),
      soon("Máscara Spider-Man 2099"),
      soon("Máscara Headpool"),
      soon("Máscara Pantera Negra"),
      soon("Coleção Máscaras 3D"),
      soon("Coleção Máscaras 3D Plus"),
    ],
  },
  {
    id: "natal",
    title: "Coleção de Natal",
    subtitle: "1 categoria",
    image: "/pacote-3d-natal-bonus.jpg",
    status: "ok",
    categories: [
      link("Coleção de Natal", "https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39"),
    ],
  },
  {
    id: "mascote",
    title: "Mascotes 3D",
    subtitle: "1 categoria",
    image: "/modulo-mascote-3d.webp",
    status: "ok",
    categories: [
      link("Mascotes 3D", "https://drive.google.com/drive/folders/1ry1s1HFnuqMfMCs00dRYJOFyQplik1eW"),
    ],
  },
  {
    id: "classicos-desenhos",
    title: "Coleção Clássicos dos Desenhos 3D",
    subtitle: "7 categorias",
    // TODO: trocar pela imagem própria desta coleção (placeholder por enquanto).
    image: "/pacote-articulados.jpg",
    status: "manutencao_parcial",
    categories: [
      soon("Tartarugas Ninja"),
      soon("Os Flintstones"),
      soon("Scooby-Doo"),
      link("Ben 10", "https://drive.google.com/drive/folders/192xIwGPklPKB_HPCzr8lIYR_4i6WrzMh"),
      link("Speed Racer", "https://drive.google.com/drive/folders/1s_iC86APOx15xz_p8Jlkgx7Q0HVvIbqr"),
      soon("Coleção 01"),
      link("Coleção 02", "https://drive.google.com/drive/folders/1GHSgLVgEgew_mFTbw7R1qSM_h_xGLtt5"),
    ],
  },
  {
    id: "heroes-dc",
    title: "Coleção Heróis da DC 3D",
    subtitle: "1 categoria",
    // TODO: trocar pela imagem própria da DC (placeholder por enquanto).
    image: "/pacote-herois-da-marvel.webp",
    status: "manutencao",
    categories: [soon("Pack DC")],
  },
  {
    id: "flexiveis",
    title: "Modelos Flexíveis e Articulados",
    subtitle: "2 categorias",
    image: "/pacote-articulados.jpg",
    status: "ok",
    categories: [
      link("Personagens Articulados", "https://drive.google.com/drive/folders/1My5S21H3nCalAAMCuQhI02_fj27vgdkj"),
      link("Modelos Articulados", "https://drive.google.com/drive/folders/1m4VLV0bcEmprvAOektJ5rJvVcH7aSrIK"),
    ],
  },
  {
    id: "calculadora",
    title: "Calculadora de Precificação Profissional",
    subtitle: "1 categoria",
    // TODO: trocar pela imagem própria da calculadora (placeholder por enquanto).
    image: "/logo-megabrain.png",
    status: "ok",
    categories: [
      link(
        "Planilha de Precificação (Versão Antiga)",
        "https://docs.google.com/spreadsheets/d/1t_g15e1boBOhbSm1caq0t5tV8ok488bbQjMyKvza54A/edit?usp=sharing",
      ),
    ],
  },
  {
    id: "nichos-lucrativos",
    title: "Os 15 Nichos Mais Lucrativos",
    subtitle: "Guia em PDF",
    // TODO: trocar pela imagem própria do guia (placeholder por enquanto).
    image: "/logo-megabrain.png",
    status: "ok",
    pdf: "/guia-nichos.pdf",
    categories: [],
  },
  {
    id: "guia-vendedor",
    title: "Guia Completo do Vendedor 3D",
    subtitle: "Guia em PDF",
    // TODO: trocar pela imagem própria do guia (placeholder por enquanto).
    image: "/logo-megabrain.png",
    status: "ok",
    pdf: "/guia-completo-vendedor-3d.pdf",
    categories: [],
  },
  {
    id: "bordado",
    title: "Módulo Bordado",
    subtitle: "Atualização contínua",
    image: "/modulo-bordado.webp",
    status: "manutencao",
    categories: [cat("Bordado")],
  },
];

export function getModule(id: string): Module | undefined {
  return MODULES.find((m) => m.id === id);
}

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
