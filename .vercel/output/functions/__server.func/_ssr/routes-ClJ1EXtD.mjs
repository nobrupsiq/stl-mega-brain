import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { C as CreditCard, D as Boxes, E as Check, O as BookOpen, S as Download, a as Trophy, c as Star, g as Lock, k as BadgeCheck, l as Sparkles, n as X, o as TrendingUp, p as Quote, s as ThumbsUp, t as Zap, u as ShieldCheck, v as Gift, y as Flame } from "../_libs/lucide-react.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { a as Color, c as Mesh, d as PointsMaterial, f as Scene, i as Clock, l as PerspectiveCamera, n as BufferAttribute, o as IcosahedronGeometry, p as ShaderMaterial, r as BufferGeometry, s as MathUtils, t as WebGLRenderer, u as Points } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-ClJ1EXtD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VERTEX = `
  uniform float uTime;
  uniform float uHover;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;
  
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main(){
    vNormal = normal;
    float n1 = snoise(position * 0.9 + vec3(0.0, uTime * 0.25, 0.0));
    float n2 = snoise(position * 2.2 + vec3(uTime * 0.35));
    float disp = n1 * 0.35 + n2 * 0.12;
    disp *= (1.0 + uHover * 0.9);
    vDisp = disp;
    vec3 newPos = position + normal * disp;
    vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.0);
    vView = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;
var FRAGMENT = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform float uRim;
  varying vec3 vNormal;
  varying vec3 vView;
  varying float vDisp;
  void main(){
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vView);
    float fres = pow(1.0 - max(dot(N, V), 0.0), 2.5);
    vec3 col = mix(uColorA, uColorB, smoothstep(-0.3, 0.4, vDisp));
    col += fres * uColorB * uRim;
    gl_FragColor = vec4(col, 0.45);
  }
`;
function ThreeScene() {
	const mountRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const mount = mountRef.current;
		if (!mount) return;
		let width = mount.clientWidth;
		let height = mount.clientHeight;
		const scene = new Scene();
		const camera = new PerspectiveCamera(55, width / height, .1, 100);
		camera.position.z = 6;
		const renderer = new WebGLRenderer({
			antialias: true,
			alpha: true
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		renderer.setSize(width, height);
		mount.appendChild(renderer.domElement);
		const uniforms = {
			uTime: { value: 0 },
			uHover: { value: 0 },
			uColorA: { value: new Color(674396) },
			uColorB: { value: new Color(3912908) },
			uRim: { value: 1.1 }
		};
		const geo = new IcosahedronGeometry(1.6, 24);
		const blobMat = new ShaderMaterial({
			uniforms,
			vertexShader: VERTEX,
			fragmentShader: FRAGMENT,
			transparent: true
		});
		const blob = new Mesh(geo, blobMat);
		scene.add(blob);
		const wireUniforms = {
			...uniforms,
			uColorA: { value: new Color(10121238) },
			uColorB: { value: new Color(13081146) },
			uRim: { value: .4 }
		};
		const wireMat = new ShaderMaterial({
			uniforms: wireUniforms,
			vertexShader: VERTEX,
			fragmentShader: FRAGMENT,
			wireframe: true,
			transparent: true,
			opacity: .18
		});
		const wire = new Mesh(geo, wireMat);
		wire.scale.setScalar(1.04);
		scene.add(wire);
		const particleCount = 700;
		const positions = new Float32Array(particleCount * 3);
		for (let i = 0; i < particleCount; i++) {
			positions[i * 3] = MathUtils.randFloatSpread(1) * 18;
			positions[i * 3 + 1] = MathUtils.randFloatSpread(1) * 18;
			positions[i * 3 + 2] = MathUtils.randFloatSpread(1) * 18;
		}
		const pGeo = new BufferGeometry();
		pGeo.setAttribute("position", new BufferAttribute(positions, 3));
		const pMat = new PointsMaterial({
			color: 16498468,
			size: .04,
			transparent: true,
			opacity: .45
		});
		const points = new Points(pGeo, pMat);
		scene.add(points);
		gsapWithCSS.from([blob.scale, wire.scale], {
			x: 0,
			y: 0,
			z: 0,
			duration: 1.8,
			ease: "elastic.out(1, 0.65)",
			stagger: .08
		});
		gsapWithCSS.from(uniforms.uRim, {
			value: 5,
			duration: 2,
			ease: "power2.out"
		});
		let raf = 0;
		let mouseX = 0;
		let mouseY = 0;
		let hoverTarget = 0;
		let lastX = 0;
		let lastY = 0;
		const onMove = (e) => {
			const nx = e.clientX / window.innerWidth - .5;
			const ny = e.clientY / window.innerHeight - .5;
			const speed = Math.min(1, Math.hypot(nx - lastX, ny - lastY) * 12);
			hoverTarget = Math.max(hoverTarget, speed);
			lastX = nx;
			lastY = ny;
			mouseX = nx * .6;
			mouseY = ny * .6;
		};
		window.addEventListener("mousemove", onMove);
		const clock = new Clock();
		const animate = () => {
			const t = clock.getElapsedTime();
			uniforms.uTime.value = t;
			wireUniforms.uTime.value = t;
			uniforms.uHover.value += (hoverTarget - uniforms.uHover.value) * .06;
			wireUniforms.uHover.value = uniforms.uHover.value;
			hoverTarget *= .94;
			blob.rotation.y = t * .18;
			blob.rotation.x = t * .12;
			wire.rotation.copy(blob.rotation);
			points.rotation.y = t * .04;
			camera.position.x += (mouseX * 2.4 - camera.position.x) * .05;
			camera.position.y += (-mouseY * 2.4 - camera.position.y) * .05;
			camera.lookAt(scene.position);
			renderer.render(scene, camera);
			raf = requestAnimationFrame(animate);
		};
		animate();
		const onResize = () => {
			if (!mount) return;
			width = mount.clientWidth;
			height = mount.clientHeight;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};
		window.addEventListener("resize", onResize);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("resize", onResize);
			gsapWithCSS.killTweensOf([
				blob.scale,
				wire.scale,
				uniforms.uRim
			]);
			renderer.dispose();
			geo.dispose();
			blobMat.dispose();
			wireMat.dispose();
			pGeo.dispose();
			pMat.dispose();
			if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: mountRef,
		className: "absolute inset-0 z-0",
		"aria-hidden": "true"
	});
}
var CHECKOUT_URL = "https://ggcheckout.app/checkout/v5/w5AmtKVDFAKCy1ORvDta";
var features = [
	{
		icon: Boxes,
		title: "+90 mil arquivos STL",
		desc: "Catálogo gigante separado por nicho, pronto para imprimir."
	},
	{
		icon: Zap,
		title: "Download imediato",
		desc: "Acesso liberado na hora da compra, direto no seu e-mail."
	},
	{
		icon: TrendingUp,
		title: "Modelos que vendem",
		desc: "Curados a partir de campeões de venda na Shopee e OLX."
	},
	{
		icon: ShieldCheck,
		title: "Arquivos testados",
		desc: "Otimizados, sem erros e prontos para fatiar."
	}
];
var niches = [
	"Decoração",
	"Brinquedos",
	"Cosplay",
	"Ferramentas",
	"Joalheria",
	"Pets",
	"Cozinha",
	"Gamer",
	"Carros",
	"Natal",
	"Halloween",
	"Star Wars"
];
var faqs = [
	{
		q: "Como recebo os arquivos?",
		a: "Imediatamente após a compra você recebe o acesso no seu e-mail, com link de download vitalício."
	},
	{
		q: "Funciona em qualquer impressora 3D?",
		a: "Sim. Os STLs são universais e funcionam com qualquer fatiador (Cura, PrusaSlicer, Bambu Studio etc.)."
	},
	{
		q: "Posso vender as peças impressas?",
		a: "Sim! Você tem direito de imprimir e revender quantas vezes quiser."
	},
	{
		q: "Tem garantia?",
		a: "Sim, 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor."
	}
];
var bonusPacks = [
	{
		img: "/pacote-de-veiculos.webp",
		title: "Pack de Veículos 3D Profissionais",
		desc: "Carros, motos, caminhões e muito mais prontos para impressão 3D. Crie miniaturas detalhadas, peças colecionáveis ou personalize modelos para revenda.",
		price: "R$ 29,90"
	},
	{
		img: "/pacote-herois-da-marvel.webp",
		title: "Coleção Heróis da Marvel",
		desc: "Receba uma coleção incrível de modelos STL de heróis lendários da Marvel: personagens, símbolos e acessórios que fazem sucesso entre colecionadores e fãs.",
		price: "R$ 39,90"
	},
	{
		img: "/pack-chaveiro.webp",
		title: "Pack de Chaveiros Personalizados",
		desc: "Mais de 1.000 modelos criativos e exclusivos, incluindo logos, personagens, esportes e temas geek. Perfeito para vender como brindes ou acessórios colecionáveis.",
		price: "R$ 19,90"
	},
	{
		img: "/pack-utensilios-domesticos.png",
		title: "Utensílios Domésticos",
		desc: "Organizadores, suportes, ganchos e peças funcionais para casa e cozinha. Produtos de giro rápido que vendem todos os dias.",
		price: "R$ 24,90"
	},
	{
		img: "/pacote-articulados.jpg",
		title: "Modelos Flexíveis e Articulados",
		desc: "Dragões, cobras, polvos e bichinhos articulados que se mexem na palma da mão. Os queridinhos das vendas em marketplace.",
		price: "R$ 29,90"
	},
	{
		img: "/colecao-mascaras-3d.webp",
		title: "Coleção Máscaras 3D",
		desc: "Máscaras decorativas e de cosplay com acabamento impecável. Perfeitas para festas, decoração e colecionadores.",
		price: "R$ 24,90"
	},
	{
		img: "/pacote-pokemon.webp",
		title: "Coleção Pokémon 3D",
		desc: "Centenas de Pokémons em alta qualidade, prontos para imprimir e encantar fãs de todas as idades.",
		price: "R$ 34,90"
	},
	{
		img: "/pacote-copa-do-mundo.webp",
		title: "Módulo Copa do Mundo",
		desc: "Troféus, mascotes, escudos e itens temáticos de futebol para surfar nas datas de maior procura do ano.",
		price: "R$ 29,90"
	},
	{
		img: "/modulo-mascote-3d.webp",
		title: "Módulo Mascotes",
		desc: "Mascotes fofos e carismáticos, ideais para brindes, lembrancinhas e peças que vendem na emoção.",
		price: "R$ 19,90"
	},
	{
		img: "/modulo-bordado.webp",
		title: "Módulo Bordados",
		desc: "Arquivos de bordado prontos para máquina, com padrões variados para personalizar roupas, bonés e acessórios.",
		price: "R$ 29,90"
	}
];
var christmasBonus = {
	img: "/pacote-3d-natal-bonus.jpg",
	title: "Coleção 3D de Natal",
	desc: "Coleção exclusiva com centenas de modelos natalinos: árvores, enfeites, personagens e decorações prontas para impressão 3D. Transforme o espírito natalino em lucro com produtos personalizados e temáticos para esta temporada!",
	price: "R$ 79,90"
};
var pains = [
	"Perder horas caçando arquivo de graça na internet que vem corrompido.",
	"Desperdiçar filamento com peças tortas, soltas ou que falham no meio.",
	"Não saber o que realmente vende e ficar imprimindo o que ninguém quer.",
	"Pagar caro em sites gringos por uns poucos modelos avulsos."
];
var forWho = [
	"Tem (ou vai comprar) uma impressora 3D e quer faturar com ela.",
	"Quer vender em marketplace, feira ou Instagram sem complicação.",
	"Está começando e precisa de modelos prontos e testados.",
	"Já imprime, mas quer ampliar o catálogo e os nichos."
];
var notForWho = [
	"Quer ficar só admirando, sem nunca apertar o botão de imprimir.",
	"Não tem interesse em ganhar dinheiro com impressão 3D.",
	"Procura modelo avulso e não um acervo completo e organizado."
];
var testimonials = [
	{
		name: "Mariana S.",
		text: "Tenho uma Ender 3 basicona e fiquei com medo dos modelos não rodarem. Mas já fiz mais de 40 impressões aqui e tudo saindo perfeitamente. Os arquivos são super compatíveis."
	},
	{
		name: "Adriano P.",
		text: "Tinha dúvida se ia conseguir vender mas comecei postando no marketplace. Primeira semana nada. Ajustei fotos e preço, na segunda semana começou a vender. Hoje, 1 mês depois, já tenho cliente fixo pedindo toda semana. Ter 90 mil opções ajuda demais pra testar vários nichos."
	},
	{
		name: "João D.",
		text: "Achei que ia ser muita quantidade para pouca qualidade, mas testei uns 20 modelos aleatórios e todos imprimiram perfeito. Zero arquivo corrompido, zero erro. Tô usando faz 3 semanas e ainda nem explorei 5% do que tem lá dentro."
	},
	{
		name: "Camila R.",
		text: "Comprei mais pelos bônus de Natal e acabei me apaixonando pelo pack inteiro. Vendi 18 enfeites natalinos numa feira local e paguei o investimento logo no primeiro dia."
	},
	{
		name: "Rafael M.",
		text: "Organização nota 10. Tudo separado por nicho, achei o que precisava em 2 minutos. Pra quem vende é mão na roda não ter que ficar caçando arquivo solto na internet."
	},
	{
		name: "Letícia A.",
		text: "O guia do vendedor sozinho já vale o valor. Apliquei as dicas de anúncio e minhas visualizações na Shopee literalmente triplicaram em uma semana."
	}
];
function LandingPage() {
	const root = (0, import_react.useRef)(null);
	const [hours, setHours] = (0, import_react.useState)(11);
	const [mins, setMins] = (0, import_react.useState)(42);
	const [secs, setSecs] = (0, import_react.useState)(17);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => {
			setSecs((s) => {
				if (s > 0) return s - 1;
				setMins((m) => {
					if (m > 0) return m - 1;
					setHours((h) => h > 0 ? h - 1 : 0);
					return 59;
				});
				return 59;
			});
		}, 1e3);
		return () => clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		gsapWithCSS.registerPlugin(ScrollTrigger);
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".hero-anim", {
				y: 40,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
				stagger: .12
			});
			gsapWithCSS.utils.toArray(".reveal").forEach((el) => {
				gsapWithCSS.from(el, {
					y: 50,
					opacity: 0,
					duration: .9,
					ease: "power3.out",
					scrollTrigger: {
						trigger: el,
						start: "top 85%"
					}
				});
			});
			gsapWithCSS.from(".niche-pill", {
				scale: .85,
				opacity: 0,
				duration: .5,
				ease: "back.out(1.6)",
				stagger: .04,
				scrollTrigger: {
					trigger: ".niche-grid",
					start: "top 80%"
				}
			});
		}, root);
		return () => ctx.revert();
	}, []);
	const pad = (n) => n.toString().padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: root,
		className: "relative min-h-screen overflow-x-clip bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-gradient-to-r from-accent via-accent/90 to-accent text-accent-foreground py-2.5 px-4 text-center text-xs sm:text-sm font-semibold",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "inline-block w-4 h-4 mr-1.5 -mt-0.5" }),
					"OFERTA RELÂMPAGO · termina em ",
					pad(hours),
					":",
					pad(mins),
					":",
					pad(secs)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-50 flex items-center justify-between px-5 sm:px-10 py-3 bg-background/80 backdrop-blur-md border-b border-border/60",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#",
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/logo-megabrain.png",
						alt: "STL Mega Brain",
						className: "h-11 sm:h-14 w-auto object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#oferta",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "h-10 px-4 sm:px-6 bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground font-bold shadow-gold hover:scale-[1.04] transition-transform",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-4 h-4 sm:mr-1.5" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Garantir por R$ 29,90"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sm:hidden",
								children: "R$ 29,90"
							})
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative bg-hero overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeScene, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-[1] bg-background/70 pointer-events-none",
						"aria-hidden": "true"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 max-w-5xl mx-auto px-5 sm:px-8 pt-10 pb-24 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hero-anim inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs sm:text-sm font-semibold mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-3.5 h-3.5 fill-accent" }), " 4,98 · +5.286 avaliações"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "hero-anim text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6",
								children: [
									"Transforme sua impressora 3D em uma",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-gold",
										children: "máquina de lucro"
									}),
									" com",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-primary",
										children: "+90 mil projetos"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "hero-anim text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8",
								children: "Pack definitivo com milhares de arquivos STL testados, organizados por nicho e prontos para você vender hoje mesmo."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-anim flex flex-col sm:flex-row gap-3 items-center justify-center mb-10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CHECKOUT_URL,
									target: "_blank",
									rel: "noopener noreferrer",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
										size: "lg",
										className: "h-14 px-8 text-base font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.03] transition-transform",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-5 h-5 mr-2" }), "Garantir meu pack por R$ 29,90"]
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-anim grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-xs sm:text-sm",
								children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "px-3 py-3 rounded-xl bg-card/60 backdrop-blur border border-border/60 flex items-center gap-2 justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "w-4 h-4 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium",
										children: f.title
									})]
								}, f.title))
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 py-20 max-w-5xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-12 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-destructive text-sm font-semibold uppercase tracking-widest mb-3",
							children: "Pare de perder tempo e dinheiro"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-5xl font-bold",
							children: [
								"Você ainda está ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "jogando dinheiro fora"
								}),
								" assim?"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 gap-4 mb-10",
						children: pains.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal flex items-start gap-3 p-5 rounded-2xl bg-card border border-destructive/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-7 h-7 shrink-0 rounded-full bg-destructive/15 grid place-items-center mt-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4 text-destructive" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm sm:text-base text-muted-foreground leading-relaxed",
								children: p
							})]
						}, p))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "reveal text-center text-lg sm:text-xl font-semibold max-w-2xl mx-auto",
						children: [
							"Imagine ter ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-primary",
								children: "+90 mil arquivos testados"
							}),
							", organizados por nicho, prontos para imprimir e vender — tudo em um lugar só."
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 py-20 max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center mb-14 reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-accent text-sm font-semibold uppercase tracking-widest mb-3",
						children: "O que tem no pack"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl sm:text-5xl font-bold",
						children: ["Tudo o que você precisa para começar a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-primary",
							children: "faturar hoje"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
					children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal group p-6 rounded-2xl bg-card border border-border hover:border-primary/60 transition-colors",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 grid place-items-center mb-4 group-hover:scale-110 transition-transform",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "w-6 h-6 text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-lg mb-2",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground leading-relaxed",
								children: f.desc
							})
						]
					}, f.title))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 py-16 bg-card/40 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "reveal text-2xl sm:text-4xl font-bold mb-3",
							children: [
								"Mais de ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-primary",
									children: "50 nichos"
								}),
								" diferentes"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "reveal text-muted-foreground mb-10 max-w-xl mx-auto",
							children: "Encontre o que vende mais na sua região e comece a lucrar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "niche-grid flex flex-wrap justify-center gap-2.5 sm:gap-3",
							children: [niches.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "niche-pill px-4 py-2 rounded-full bg-background border border-border text-sm font-medium hover:border-primary hover:text-primary transition-colors",
								children: n
							}, n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "niche-pill px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary-glow text-primary-foreground text-sm font-bold",
								children: "+ muitos outros"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 py-20 max-w-5xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "reveal text-3xl sm:text-5xl font-bold text-center mb-12",
					children: ["Esse pack é ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-primary",
						children: "pra você?"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid md:grid-cols-2 gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal rounded-2xl bg-card border border-primary/30 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThumbsUp, { className: "w-6 h-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-xl",
								children: "É pra você se…"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: forWho.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm sm:text-base",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal rounded-2xl bg-card border border-destructive/30 p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 mb-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6 text-destructive" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-bold text-xl",
								children: "Não é pra você se…"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-3",
							children: notForWho.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2.5 text-sm sm:text-base text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5 text-destructive shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
							}, item))
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 py-20 max-w-6xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-14 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-accent text-sm font-semibold uppercase tracking-widest mb-3",
							children: "Bônus exclusivos"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-5xl font-bold flex flex-wrap items-center justify-center gap-3",
							children: [
								"Compre hoje e ganhe ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "11 bônus exclusivos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-8 h-8 sm:w-10 sm:h-10 text-accent" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
						children: bonusPacks.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal group flex flex-col rounded-2xl bg-card border border-border hover:border-accent/60 transition-colors overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-accent text-accent-foreground text-center py-2.5 font-bold text-sm uppercase tracking-wide",
								children: ["Bônus ", i + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6 flex flex-col flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-lg text-center mb-4 min-h-[3.5rem] flex items-center justify-center",
										children: b.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-gradient-to-br from-primary/20 to-primary/5 grid place-items-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: b.img,
											alt: b.title,
											loading: "lazy",
											className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground leading-relaxed text-center flex-1",
										children: b.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 text-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted-foreground line-through",
											children: ["De ", b.price]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-primary font-bold text-lg uppercase",
											children: "Vai sair de graça"
										})]
									})
								]
							})]
						}, b.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "reveal mt-8 max-w-md mx-auto rounded-2xl bg-card border border-border overflow-hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2.5 font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2",
							children: "🎄 Bônus de Natal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold text-lg text-center mb-4",
									children: christmasBonus.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "aspect-[4/3] rounded-xl overflow-hidden mb-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: christmasBonus.img,
										alt: christmasBonus.title,
										loading: "lazy",
										className: "w-full h-full object-cover"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed text-center",
									children: christmasBonus.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 text-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground line-through",
										children: ["De ", christmasBonus.price]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-primary font-bold text-lg uppercase",
										children: "Vai sair de graça"
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mt-16 mb-8 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-accent text-sm font-semibold uppercase tracking-widest mb-2",
							children: "Presentes que aceleram suas vendas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "text-2xl sm:text-4xl font-bold",
							children: [
								"E ainda leva ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "2 guias digitais"
								}),
								" de brinde"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-2 gap-6",
						children: [{
							icon: BookOpen,
							title: "Manual de Impressão 3D SEM ERROS",
							desc: "Guia completo para configurar sua impressora e nunca mais perder filamento com peças tortas, soltas ou com falha.",
							value: "R$ 47,00"
						}, {
							icon: Trophy,
							title: "Guia do Vendedor Lucrativo",
							desc: "Estratégias prontas para anunciar e vender suas peças todos os dias na Shopee, Mercado Livre, OLX e Instagram.",
							value: "R$ 67,00"
						}].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "reveal group relative rounded-2xl p-[2px] bg-gradient-to-br from-accent via-accent/40 to-primary shadow-gold hover:scale-[1.02] transition-transform duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative h-full rounded-[14px] bg-card p-7 overflow-hidden",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 w-44 h-44 bg-accent/15 rounded-full blur-3xl group-hover:bg-accent/25 transition-colors" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-center justify-between mb-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-extrabold uppercase tracking-wide",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "w-3.5 h-3.5" }), " Bônus exclusivo"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold text-muted-foreground line-through",
											children: b.value
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br from-accent to-accent/70 grid place-items-center shadow-gold group-hover:scale-110 transition-transform",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(b.icon, { className: "w-8 h-8 text-accent-foreground" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-bold text-xl mb-2 leading-tight",
												children: b.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground leading-relaxed",
												children: b.desc
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative mt-5 pt-4 border-t border-border/60 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground",
											children: "Hoje você paga"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-lg font-extrabold text-primary uppercase",
											children: "Grátis 🎉"
										})]
									})
								]
							})
						}, b.title))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 py-20 bg-card/40 border-y border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-6xl mx-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-14 reveal",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-4",
							children: "Depoimentos reais"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-3xl sm:text-5xl font-bold",
							children: ["Veja o que os nossos ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "clientes estão dizendo"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5",
						children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "reveal flex flex-col p-6 rounded-2xl bg-background border border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "w-8 h-8 text-primary/40 mb-3" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground leading-relaxed flex-1",
									children: [
										"\"",
										t.text,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex gap-0.5 mt-5 mb-3",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "w-4 h-4 fill-accent text-accent" }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-bold",
									children: t.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "flex items-center gap-1 text-xs text-primary mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BadgeCheck, { className: "w-4 h-4" }), " Cliente Verificado"]
								})
							]
						}, t.name))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "px-5 sm:px-8 py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 border border-accent/30 p-8 sm:p-10 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "text-2xl sm:text-4xl font-bold mb-3",
							children: [
								"Junte-se a ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient-gold",
									children: "+5.000 makers"
								}),
								" que já estão lucrando"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mb-6 max-w-xl mx-auto",
							children: "Comece hoje com tudo pronto. Acesso imediato, garantia de 7 dias e o melhor preço que esse pack já teve."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: CHECKOUT_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "h-14 px-8 text-base font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.03] transition-transform",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-5 h-5 mr-2" }), "Quero meu pack por R$ 29,90"]
							})
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "oferta",
				className: "px-5 sm:px-8 py-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "reveal max-w-3xl mx-auto rounded-3xl p-1 bg-gradient-to-br from-primary via-accent to-primary-glow shadow-glow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[22px] bg-card p-8 sm:p-12 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-destructive/15 text-destructive text-xs font-bold uppercase tracking-wide mb-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flame, { className: "w-3.5 h-3.5" }),
									" Oferta termina em ",
									pad(hours),
									":",
									pad(mins),
									":",
									pad(secs)
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl sm:text-5xl font-bold mb-2",
								children: "Pack STL Definitivo"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mb-8",
								children: "+ 13 bônus exclusivos · Acesso vitalício"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-md mx-auto text-left space-y-2 mb-8 p-5 rounded-2xl bg-background/50 border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3",
										children: "Tudo o que você recebe hoje:"
									}),
									[
										{
											label: "Pack com +90 mil arquivos STL",
											val: "R$ 197,00"
										},
										{
											label: "11 bônus de nichos (veículos, Marvel, Pokémon…)",
											val: "R$ 297,00"
										},
										{
											label: "Coleção 3D de Natal",
											val: "R$ 79,00"
										},
										{
											label: "Manual de Impressão 3D Sem Erros",
											val: "R$ 47,00"
										},
										{
											label: "Guia do Vendedor Lucrativo",
											val: "R$ 67,00"
										}
									].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between gap-3 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-start gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-4 h-4 text-primary shrink-0 mt-0.5" }),
												" ",
												row.label
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground line-through shrink-0",
											children: row.val
										})]
									}, row.label)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between pt-3 mt-2 border-t border-border font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Valor real" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground line-through",
											children: "R$ 687,00"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-center gap-3 mb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-base sm:text-lg text-muted-foreground line-through",
									children: "R$ 687,00"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "px-2 py-0.5 rounded-md bg-accent text-accent-foreground text-xs font-bold",
									children: "-95%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground",
										children: "hoje por apenas"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-5xl sm:text-7xl font-bold text-gradient-gold",
										children: "R$ 29,90"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-2",
										children: "ou 3x de R$ 10,99 no cartão"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary font-semibold mb-8",
								children: "Menos que um lanche — e dá pra pagar de volta na sua primeira venda. 🍔"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: CHECKOUT_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "block",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "lg",
									className: "w-full h-16 text-base sm:text-lg font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.02] transition-transform",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-5 h-5 mr-2" }), "Liberar meu acesso agora"]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "w-4 h-4 text-primary" }), " Compra segura (SSL)"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-4 h-4 text-primary" }), " Pix e Cartão"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "w-4 h-4 text-primary" }), " Garantia de 7 dias"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "w-4 h-4 text-primary" }), " Acesso imediato"]
									})
								]
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 py-20 max-w-3xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "reveal text-3xl sm:text-4xl font-bold text-center mb-12",
					children: ["Perguntas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gradient-primary",
						children: "frequentes"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "reveal group rounded-xl bg-card border border-border p-5 open:border-primary/60 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "cursor-pointer font-semibold flex items-center justify-between gap-4 list-none",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary text-2xl leading-none group-open:rotate-45 transition-transform",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: f.a
						})]
					}, f.q))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-5 sm:px-8 pb-24 pt-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "reveal text-2xl sm:text-4xl font-bold mb-4 max-w-2xl mx-auto",
						children: ["Sua impressora pode começar a ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold",
							children: "se pagar ainda hoje"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "reveal text-muted-foreground mb-7 max-w-xl mx-auto",
						children: "Acesso imediato a tudo + 13 bônus por R$ 29,90. Com garantia de 7 dias, o risco é todo nosso."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: CHECKOUT_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-block reveal",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "h-16 px-10 text-base sm:text-lg font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent hover:to-accent text-accent-foreground shadow-gold hover:scale-[1.03] transition-transform",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-5 h-5 mr-2" }), "Garantir meu pack agora"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-border px-5 sm:px-8 py-10 pb-28 md:pb-10 text-center text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" STL PRO · Todos os direitos reservados"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: "Este site não é afiliado ao Facebook, Instagram, Google ou Shopee."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-background/90 backdrop-blur-md border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: CHECKOUT_URL,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "lg",
						className: "w-full h-14 text-base font-bold bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "w-5 h-5 mr-2" }), "Garantir meu pack · R$ 29,90"]
					})
				})
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingPage, {});
}
//#endregion
export { Index as component };
