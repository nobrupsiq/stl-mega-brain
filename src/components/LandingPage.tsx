import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ThreeScene } from "./ThreeScene";
import { Button } from "@/components/ui/button";
import {
  Boxes,
  Zap,
  ShieldCheck,
  Sparkles,
  Download,
  TrendingUp,
  BookOpen,
  Trophy,
  Star,
  Check,
  Clock,
  Quote,
  BadgeCheck,
  Gift,
  Flame,
  Lock,
  CreditCard,
  X,
  ThumbsUp,
} from "lucide-react";

const CHECKOUT_URL = "https://ggcheckout.app/checkout/v5/w5AmtKVDFAKCy1ORvDta";

const features = [
  { icon: Boxes, title: "+90 mil arquivos STL", desc: "Catálogo gigante separado por nicho, pronto para imprimir." },
  { icon: Zap, title: "Download imediato", desc: "Acesso liberado na hora da compra, direto no seu e-mail." },
  { icon: TrendingUp, title: "Modelos que vendem", desc: "Curados a partir de campeões de venda na Shopee e OLX." },
  { icon: ShieldCheck, title: "Arquivos testados", desc: "Otimizados, sem erros e prontos para fatiar." },
];

const niches = [
  "Decoração", "Brinquedos", "Cosplay", "Ferramentas", "Joalheria",
  "Pets", "Cozinha", "Gamer", "Carros", "Natal", "Halloween", "Star Wars",
];

const faqs = [
  { q: "Como recebo os arquivos?", a: "Imediatamente após a compra você recebe o acesso no seu e-mail, com link de download vitalício." },
  { q: "Funciona em qualquer impressora 3D?", a: "Sim. Os STLs são universais e funcionam com qualquer fatiador (Cura, PrusaSlicer, Bambu Studio etc.)." },
  { q: "Posso vender as peças impressas?", a: "Sim! Você tem direito de imprimir e revender quantas vezes quiser." },
  { q: "Tem garantia?", a: "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor." },
];

// Bônus packs com imagens da pasta /public
const bonusPacks = [
  {
    img: "/pacote-de-veiculos.webp",
    title: "Pack de Veículos 3D Profissionais",
    desc: "Carros, motos, caminhões e muito mais prontos para impressão 3D. Crie miniaturas detalhadas, peças colecionáveis ou personalize modelos para revenda.",
    price: "R$ 29,90",
  },
  {
    img: "/pacote-herois-da-marvel.webp",
    title: "Coleção Heróis da Marvel",
    desc: "Receba uma coleção incrível de modelos STL de heróis lendários da Marvel: personagens, símbolos e acessórios que fazem sucesso entre colecionadores e fãs.",
    price: "R$ 39,90",
  },
  {
    img: "/pack-chaveiro.webp",
    title: "Pack de Chaveiros Personalizados",
    desc: "Mais de 1.000 modelos criativos e exclusivos, incluindo logos, personagens, esportes e temas geek. Perfeito para vender como brindes ou acessórios colecionáveis.",
    price: "R$ 19,90",
  },
  {
    img: "/pack-utensilios-domesticos.png",
    title: "Utensílios Domésticos",
    desc: "Organizadores, suportes, ganchos e peças funcionais para casa e cozinha. Produtos de giro rápido que vendem todos os dias.",
    price: "R$ 24,90",
  },
  {
    img: "/pacote-articulados.jpg",
    title: "Modelos Flexíveis e Articulados",
    desc: "Dragões, cobras, polvos e bichinhos articulados que se mexem na palma da mão. Os queridinhos das vendas em marketplace.",
    price: "R$ 29,90",
  },
  {
    img: "/colecao-mascaras-3d.webp",
    title: "Coleção Máscaras 3D",
    desc: "Máscaras decorativas e de cosplay com acabamento impecável. Perfeitas para festas, decoração e colecionadores.",
    price: "R$ 24,90",
  },
  {
    img: "/pacote-pokemon.webp",
    title: "Coleção Pokémon 3D",
    desc: "Centenas de Pokémons em alta qualidade, prontos para imprimir e encantar fãs de todas as idades.",
    price: "R$ 34,90",
  },
  {
    img: "/pacote-copa-do-mundo.webp",
    title: "Módulo Copa do Mundo",
    desc: "Troféus, mascotes, escudos e itens temáticos de futebol para surfar nas datas de maior procura do ano.",
    price: "R$ 29,90",
  },
  {
    img: "/modulo-mascote-3d.webp",
    title: "Módulo Mascotes",
    desc: "Mascotes fofos e carismáticos, ideais para brindes, lembrancinhas e peças que vendem na emoção.",
    price: "R$ 19,90",
  },
  {
    img: "/modulo-bordado.webp",
    title: "Módulo Bordados",
    desc: "Arquivos de bordado prontos para máquina, com padrões variados para personalizar roupas, bonés e acessórios.",
    price: "R$ 29,90",
  },
];

const christmasBonus = {
  img: "/pacote-3d-natal-bonus.jpg",
  title: "Coleção 3D de Natal",
  desc: "Coleção exclusiva com centenas de modelos natalinos: árvores, enfeites, personagens e decorações prontas para impressão 3D. Transforme o espírito natalino em lucro com produtos personalizados e temáticos para esta temporada!",
  price: "R$ 79,90",
};

const pains = [
  "Perder horas caçando arquivo de graça na internet que vem corrompido.",
  "Desperdiçar filamento com peças tortas, soltas ou que falham no meio.",
  "Não saber o que realmente vende e ficar imprimindo o que ninguém quer.",
  "Pagar caro em sites gringos por uns poucos modelos avulsos.",
];

const forWho = [
  "Tem (ou vai comprar) uma impressora 3D e quer faturar com ela.",
  "Quer vender em marketplace, feira ou Instagram sem complicação.",
  "Está começando e precisa de modelos prontos e testados.",
  "Já imprime, mas quer ampliar o catálogo e os nichos.",
];

const notForWho = [
  "Quer ficar só admirando, sem nunca apertar o botão de imprimir.",
  "Não tem interesse em ganhar dinheiro com impressão 3D.",
  "Procura modelo avulso e não um acervo completo e organizado.",
];

const testimonials = [
  {
    name: "Mariana S.",
    text: "Tenho uma Ender 3 basicona e fiquei com medo dos modelos não rodarem. Mas já fiz mais de 40 impressões aqui e tudo saindo perfeitamente. Os arquivos são super compatíveis.",
  },
  {
    name: "Adriano P.",
    text: "Tinha dúvida se ia conseguir vender mas comecei postando no marketplace. Primeira semana nada. Ajustei fotos e preço, na segunda semana começou a vender. Hoje, 1 mês depois, já tenho cliente fixo pedindo toda semana. Ter 90 mil opções ajuda demais pra testar vários nichos.",
  },
  {
    name: "João D.",
    text: "Achei que ia ser muita quantidade para pouca qualidade, mas testei uns 20 modelos aleatórios e todos imprimiram perfeito. Zero arquivo corrompido, zero erro. Tô usando faz 3 semanas e ainda nem explorei 5% do que tem lá dentro.",
  },
  {
    name: "Camila R.",
    text: "Comprei mais pelos bônus de Natal e acabei me apaixonando pelo pack inteiro. Vendi 18 enfeites natalinos numa feira local e paguei o investimento logo no primeiro dia.",
  },
  {
    name: "Rafael M.",
    text: "Organização nota 10. Tudo separado por nicho, achei o que precisava em 2 minutos. Pra quem vende é mão na roda não ter que ficar caçando arquivo solto na internet.",
  },
  {
    name: "Letícia A.",
    text: "O guia do vendedor sozinho já vale o valor. Apliquei as dicas de anúncio e minhas visualizações na Shopee literalmente triplicaram em uma semana.",
  },
];

export function LandingPage() {
  const root = useRef<HTMLDivElement>(null);
  const [hours, setHours] = useState(11);
  const [mins, setMins] = useState(42);
  const [secs, setSecs] = useState(17);

  // Countdown timer
  useEffect(() => {
    const id = setInterval(() => {
      setSecs((s) => {
        if (s > 0) return s - 1;
        setMins((m) => {
          if (m > 0) return m - 1;
          setHours((h) => (h > 0 ? h - 1 : 0));
          return 59;
        });
        return 59;
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
      });

      // Reveal-on-scroll
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      // Niche marquee row stagger
      gsap.from(".niche-pill", {
        scale: 0.85,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.6)",
        stagger: 0.04,
        scrollTrigger: { trigger: ".niche-grid", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div ref={root} className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Promo bar */}
      <div className="bg-gradient-to-r from-accent via-accent/90 to-accent text-accent-foreground py-2.5 px-4 text-center text-xs sm:text-sm font-semibold">
        <Sparkles className="inline-block w-4 h-4 mr-1.5 -mt-0.5" />
        OFERTA RELÂMPAGO · termina em {pad(hours)}:{pad(mins)}:{pad(secs)}
      </div>

      {/* HEADER — sticky */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-5 sm:px-10 py-3 bg-background/80 backdrop-blur-md border-b border-border/60">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo-megabrain.png"
            alt="STL Mega Brain"
            className="h-11 sm:h-14 w-auto object-contain"
          />
        </a>
        <a href="#oferta">
          <Button
            size="sm"
            className="h-10 px-4 sm:px-6 bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground font-bold shadow-gold hover:scale-[1.04] transition-transform"
          >
            <Download className="w-4 h-4 sm:mr-1.5" />
            <span className="hidden sm:inline">Garantir por R$ 29,90</span>
            <span className="sm:hidden">R$ 29,90</span>
          </Button>
        </a>
      </header>

      {/* HERO */}
      <section className="relative bg-hero overflow-hidden">
        <ThreeScene />
        {/* Dark veil so the 3D blob stays subtle behind the headline */}
        <div className="absolute inset-0 z-[1] bg-background/70 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-24 text-center">
          <div className="hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-6">
            <Star className="w-3.5 h-3.5 fill-accent" /> 4,98 · +5.286 avaliações
          </div>

          <h1 className="hero-anim text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
            Transforme sua impressora 3D em uma{" "}
            <span className="text-gradient-gold">máquina de lucro</span> com{" "}
            <span className="text-gradient-primary">+90 mil projetos</span>
          </h1>

          <p className="hero-anim text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Pack definitivo com milhares de arquivos STL testados, organizados por nicho e prontos para você vender hoje mesmo.
          </p>

          <div className="hero-anim flex flex-col sm:flex-row gap-3 items-center justify-center mb-10">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="h-14 px-8 text-base font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.03] transition-transform"
              >
                <Download className="w-5 h-5 mr-2" />
                Garantir meu pack por R$ 29,90
              </Button>
            </a>
          </div>

          <div className="hero-anim grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs sm:text-sm">
            {features.map((f) => (
              <div key={f.title} className="px-3 py-3 rounded-xl bg-card/60 backdrop-blur border border-border/60 flex items-center gap-2 justify-center">
                <f.icon className="w-4 h-4 text-primary shrink-0" />
                <span className="font-medium">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN / AGITATION */}
      <section className="px-5 sm:px-8 py-20 max-w-5xl mx-auto">
        <div className="text-center mb-12 reveal">
          <p className="text-destructive text-sm font-semibold uppercase tracking-widest mb-3">Pare de perder tempo e dinheiro</p>
          <h2 className="text-3xl sm:text-5xl font-bold">
            Você ainda está <span className="text-gradient-gold">jogando dinheiro fora</span> assim?
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {pains.map((p) => (
            <div key={p} className="reveal flex items-start gap-3 p-5 rounded-2xl bg-card border border-destructive/20">
              <span className="w-7 h-7 shrink-0 rounded-full bg-destructive/15 grid place-items-center mt-0.5">
                <X className="w-4 h-4 text-destructive" />
              </span>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
        <p className="reveal text-center text-lg sm:text-xl font-semibold max-w-2xl mx-auto">
          Imagine ter <span className="text-gradient-primary">+90 mil arquivos testados</span>, organizados por nicho,
          prontos para imprimir e vender — tudo em um lugar só.
        </p>
      </section>

      {/* FEATURES DETAIL */}
      <section className="px-5 sm:px-8 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">O que tem no pack</p>
          <h2 className="text-3xl sm:text-5xl font-bold">Tudo o que você precisa para começar a <span className="text-gradient-primary">faturar hoje</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="reveal group p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NICHES */}
      <section className="px-5 sm:px-8 py-16 bg-card/40 border-y border-border">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="reveal text-2xl sm:text-4xl font-bold mb-3">Mais de <span className="text-gradient-primary">50 nichos</span> diferentes</h2>
          <p className="reveal text-muted-foreground mb-10 max-w-xl mx-auto">Encontre o que vende mais na sua região e comece a lucrar.</p>
          <div className="niche-grid flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {niches.map((n) => (
              <span key={n} className="niche-pill px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors">
                {n}
              </span>
            ))}
            <span className="niche-pill px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-sm font-bold">
              + muitos outros
            </span>
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="px-5 sm:px-8 py-20 max-w-5xl mx-auto">
        <h2 className="reveal text-3xl sm:text-5xl font-bold text-center mb-12">
          Esse pack é <span className="text-gradient-primary">pra você?</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="reveal rounded-2xl bg-card border border-primary/30 p-7">
            <div className="flex items-center gap-2 mb-5">
              <ThumbsUp className="w-6 h-6 text-primary" />
              <h3 className="font-bold text-xl">É pra você se…</h3>
            </div>
            <ul className="space-y-3">
              {forWho.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-2xl bg-card border border-destructive/30 p-7">
            <div className="flex items-center gap-2 mb-5">
              <X className="w-6 h-6 text-destructive" />
              <h3 className="font-bold text-xl">Não é pra você se…</h3>
            </div>
            <ul className="space-y-3">
              {notForWho.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground">
                  <X className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BONUS PACKS */}
      <section className="px-5 sm:px-8 py-20 max-w-6xl mx-auto">
        <div className="text-center mb-14 reveal">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">Bônus exclusivos</p>
          <h2 className="text-3xl sm:text-5xl font-bold flex flex-wrap items-center justify-center gap-3">
            Compre hoje e ganhe <span className="text-gradient-gold">11 bônus exclusivos</span>
            <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonusPacks.map((b, i) => (
            <div
              key={b.title}
              className="reveal group flex flex-col rounded-2xl bg-card border border-border hover:border-accent/60 transition-colors overflow-hidden"
            >
              <div className="bg-accent text-accent-foreground text-center py-2.5 font-bold text-sm uppercase tracking-wide">
                Bônus {i + 1}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg text-center mb-4 min-h-[3.5rem] flex items-center justify-center">
                  {b.title}
                </h3>
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-primary/20 to-primary/5 grid place-items-center">
                  <img
                    src={b.img}
                    alt={b.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-center flex-1">
                  {b.desc}
                </p>
                <div className="mt-5 text-center">
                  <p className="text-sm text-muted-foreground line-through">De {b.price}</p>
                  <p className="text-primary font-bold text-lg uppercase">Vai sair de graça</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CHRISTMAS BONUS */}
        <div className="reveal mt-8 max-w-md mx-auto rounded-2xl bg-card border border-border overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2.5 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2">
            🎄 Bônus de Natal
          </div>
          <div className="p-6 flex flex-col">
            <h3 className="font-bold text-lg text-center mb-4">{christmasBonus.title}</h3>
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5">
              <img
                src={christmasBonus.img}
                alt={christmasBonus.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed text-center">
              {christmasBonus.desc}
            </p>
            <div className="mt-5 text-center">
              <p className="text-sm text-muted-foreground line-through">De {christmasBonus.price}</p>
              <p className="text-primary font-bold text-lg uppercase">Vai sair de graça</p>
            </div>
          </div>
        </div>

        {/* Bônus digitais extras — destaque */}
        <div className="text-center mt-16 mb-8 reveal">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">Presentes que aceleram suas vendas</p>
          <h3 className="text-2xl sm:text-4xl font-bold">
            E ainda leva <span className="text-gradient-gold">2 guias digitais</span> de brinde
          </h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { icon: BookOpen, title: "Manual de Impressão 3D SEM ERROS", desc: "Guia completo para configurar sua impressora e nunca mais perder filamento com peças tortas, soltas ou com falha.", value: "R$ 47,00" },
            { icon: Trophy, title: "Guia do Vendedor Lucrativo", desc: "Estratégias prontas para anunciar e vender suas peças todos os dias na Shopee, Mercado Livre, OLX e Instagram.", value: "R$ 67,00" },
          ].map((b) => (
            <div
              key={b.title}
              className="reveal group relative rounded-2xl p-[2px] bg-gradient-to-br from-accent via-accent/40 to-primary shadow-gold hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative h-full rounded-[14px] bg-card p-7 overflow-hidden">
                <div className="absolute -top-12 -right-12 w-44 h-44 bg-accent/15 rounded-full blur-3xl group-hover:bg-accent/25 transition-colors" />
                <div className="relative flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-extrabold uppercase tracking-wide">
                    <Gift className="w-3.5 h-3.5" /> Bônus exclusivo
                  </span>
                  <span className="text-xs font-bold text-muted-foreground line-through">{b.value}</span>
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-accent to-accent/70 grid place-items-center shadow-gold group-hover:scale-110 transition-transform">
                    <b.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-xl mb-2 leading-tight">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                </div>
                <div className="relative mt-5 pt-4 border-t border-border/60 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Hoje você paga</span>
                  <span className="text-lg font-extrabold text-primary uppercase">Grátis 🎉</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 sm:px-8 py-20 bg-card/40 border-y border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Depoimentos reais
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold">
              Veja o que os nossos <span className="text-gradient-gold">clientes estão dizendo</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="reveal flex flex-col p-6 rounded-2xl bg-background border border-border"
              >
                <Quote className="w-8 h-8 text-primary/40 mb-3" />
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex gap-0.5 mt-5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-bold">{t.name}</p>
                <p className="flex items-center gap-1 text-xs text-primary mt-0.5">
                  <BadgeCheck className="w-4 h-4" /> Cliente Verificado
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MID CTA */}
      <section className="px-5 sm:px-8 py-16">
        <div className="reveal max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border border-accent/30 p-8 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3">
            Junte-se a <span className="text-gradient-gold">+5.000 makers</span> que já estão lucrando
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Comece hoje com tudo pronto. Acesso imediato, garantia de 7 dias e o melhor preço que esse pack já teve.
          </p>
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button
              size="lg"
              className="h-14 px-8 text-base font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.03] transition-transform"
            >
              <Download className="w-5 h-5 mr-2" />
              Quero meu pack por R$ 29,90
            </Button>
          </a>
        </div>
      </section>

      {/* PRICING / OFFER */}
      <section id="oferta" className="px-5 sm:px-8 py-20">
        <div className="reveal max-w-3xl mx-auto rounded-3xl p-1 bg-gradient-to-br from-primary via-accent to-primary-glow shadow-glow">
          <div className="rounded-[22px] bg-card p-8 sm:p-12 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/15 text-destructive text-xs font-bold uppercase tracking-wide mb-4">
              <Flame className="w-3.5 h-3.5" /> Oferta termina em {pad(hours)}:{pad(mins)}:{pad(secs)}
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-2">Pack STL Definitivo</h2>
            <p className="text-muted-foreground mb-8">+ 13 bônus exclusivos · Acesso vitalício</p>

            {/* Value stack */}
            <div className="max-w-md mx-auto text-left space-y-2 mb-8 p-5 rounded-2xl bg-background/50 border border-border">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Tudo o que você recebe hoje:</p>
              {[
                { label: "Pack com +90 mil arquivos STL", val: "R$ 197,00" },
                { label: "11 bônus de nichos (veículos, Marvel, Pokémon…)", val: "R$ 297,00" },
                { label: "Coleção 3D de Natal", val: "R$ 79,00" },
                { label: "Manual de Impressão 3D Sem Erros", val: "R$ 47,00" },
                { label: "Guia do Vendedor Lucrativo", val: "R$ 67,00" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between gap-3 text-sm">
                  <span className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {row.label}
                  </span>
                  <span className="text-muted-foreground line-through shrink-0">{row.val}</span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-3 mt-2 border-t border-border font-bold">
                <span>Valor real</span>
                <span className="text-muted-foreground line-through">R$ 687,00</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-base sm:text-lg text-muted-foreground line-through">R$ 687,00</span>
              <span className="px-2 py-0.5 rounded-md bg-accent text-accent-foreground text-xs font-bold">-95%</span>
            </div>
            <div className="mb-2">
              <p className="text-sm text-muted-foreground">hoje por apenas</p>
              <span className="text-5xl sm:text-7xl font-bold text-gradient-gold">R$ 29,90</span>
              <p className="text-sm text-muted-foreground mt-2">ou 3x de R$ 10,99 no cartão</p>
            </div>
            <p className="text-sm text-primary font-semibold mb-8">
              Menos que um lanche — e dá pra pagar de volta na sua primeira venda. 🍔
            </p>

            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block">
              <Button
                size="lg"
                className="w-full h-16 text-base sm:text-lg font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.02] transition-transform"
              >
                <Download className="w-5 h-5 mr-2" />
                Liberar meu acesso agora
              </Button>
            </a>

            {/* Trust seals */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-primary" /> Compra segura (SSL)</span>
              <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-primary" /> Pix e Cartão</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-primary" /> Garantia de 7 dias</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-primary" /> Acesso imediato</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 py-20 max-w-3xl mx-auto">
        <h2 className="reveal text-3xl sm:text-4xl font-bold text-center mb-12">Perguntas <span className="text-gradient-primary">frequentes</span></h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="reveal group rounded-xl bg-card border border-border p-5 open:border-primary/60 transition-colors">
              <summary className="cursor-pointer font-semibold flex items-center justify-between gap-4 list-none">
                {f.q}
                <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 sm:px-8 pb-24 pt-4 text-center">
        <h2 className="reveal text-2xl sm:text-4xl font-bold mb-4 max-w-2xl mx-auto">
          Sua impressora pode começar a <span className="text-gradient-gold">se pagar ainda hoje</span>
        </h2>
        <p className="reveal text-muted-foreground mb-7 max-w-xl mx-auto">
          Acesso imediato a tudo + 13 bônus por R$ 29,90. Com garantia de 7 dias, o risco é todo nosso.
        </p>
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-block reveal">
          <Button
            size="lg"
            className="h-16 px-10 text-base sm:text-lg font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.03] transition-transform"
          >
            <Download className="w-5 h-5 mr-2" />
            Garantir meu pack agora
          </Button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 sm:px-8 py-10 pb-28 md:pb-10 text-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} STL PRO · Todos os direitos reservados</p>
        <p className="mt-1">Este site não é afiliado ao Facebook, Instagram, Google ou Shopee.</p>
      </footer>

      {/* FLOATING MOBILE CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-background/90 backdrop-blur-md border-t border-border">
        <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block">
          <Button
            size="lg"
            className="w-full h-14 text-base font-bold bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-gold"
          >
            <Download className="w-5 h-5 mr-2" />
            Garantir meu pack · R$ 29,90
          </Button>
        </a>
      </div>
    </div>
  );
}