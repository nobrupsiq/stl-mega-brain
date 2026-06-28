import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as cn } from "./button-DRsC1qZi.mjs";
import { t as clearAccessEmail } from "./auth-B45Auu7R.mjs";
import { D as Boxes, E as Check, T as ChevronRight, h as LogOut, w as Circle } from "../_libs/lucide-react.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/modules-D2WMvFY9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2;
var DropdownMenuTrigger = Trigger;
var DropdownMenuSubTrigger = import_react.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SubTrigger2, {
	ref,
	className: cn("flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", inset && "pl-8", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "ml-auto" })]
}));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
var DropdownMenuSubContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubContent2, {
	ref,
	className: cn("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}));
DropdownMenuSubContent.displayName = SubContent2.displayName;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md", "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0", inset && "pl-8", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuCheckboxItem = import_react.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	checked,
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), children]
}));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
var DropdownMenuRadioItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RadioItem2, {
	ref,
	className: cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemIndicator2, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-2 w-2 fill-current" }) })
	}), children]
}));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var DropdownMenuShortcut = ({ className, ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("ml-auto text-xs tracking-widest opacity-60", className),
		...props
	});
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
function MembersHeader({ email }) {
	const navigate = useNavigate();
	const initial = (email[0] ?? "U").toUpperCase();
	function handleLogout() {
		clearAccessEmail();
		navigate({ to: "/acesso" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/membros",
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "h-6 w-6 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-lg font-bold tracking-tight",
					children: ["STL ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "MEGA BRAIN"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground shadow-glow outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
					"aria-label": "Conta",
					children: initial
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
				align: "end",
				className: "w-56",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, {
						className: "truncate font-normal text-muted-foreground",
						children: email
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: handleLogout,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-4 w-4" }), "Sair"]
					})
				]
			})] })]
		})
	});
}
function link(name, href) {
	return {
		name,
		links: [{
			label: "Acessar",
			href
		}]
	};
}
function soon(name) {
	return {
		name,
		links: [],
		maintenance: true
	};
}
function cat(name, links = 2) {
	return {
		name,
		links: Array.from({ length: links }, (_, i) => ({
			label: `Link ${String(i + 1).padStart(2, "0")}`,
			href: "#"
		}))
	};
}
var MODULES = [
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
			link("Animes - Pack 02", "https://drive.google.com/drive/folders/1NOz5K0FAGurD9Evotfsqn7e-E58GtSIu")
		]
	},
	{
		id: "copa-2026",
		title: "Copa do Mundo 2026",
		subtitle: "1 categoria",
		image: "/pacote-copa-do-mundo.webp",
		status: "ok",
		categories: [link("Copa do Mundo 2026", "https://drive.google.com/drive/folders/1wtyF-KgKQ8RGbTtwfVWnKg1wwGDZuHrJ")]
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
			link("Tanks", "https://drive.google.com/drive/folders/1uDgT2zE94V1s08nb6brGZmTkbWfpHtXJ")
		]
	},
	{
		id: "marvel",
		title: "Heróis da Marvel",
		subtitle: "2 categorias",
		image: "/pacote-herois-da-marvel.webp",
		status: "manutencao_parcial",
		categories: [link("Pack Marvel 01", "https://drive.google.com/drive/folders/17g2yCPak1kuZWEabZPvkLDatX0g2ipft"), link("Pack Marvel 02", "https://drive.google.com/drive/folders/1utqBNPeqvOx_QVb5wjGs1DBStzSULsAk")]
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
			link("Geração 4", "https://drive.google.com/drive/folders/1AbtOC6nvDcPKO2LcD8I-1E6vhpWSVbhz")
		]
	},
	{
		id: "chaveiros",
		title: "Chaveiros Personalizados",
		subtitle: "1 categoria",
		image: "/pack-chaveiro.webp",
		status: "manutencao",
		categories: [link("Pack 01", "https://drive.google.com/file/d/14pwIzlvshO2Ap8-jFvYLF_FBNuY1Jp_I/view")]
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
			link("Pack de Utensílios", "https://drive.google.com/drive/folders/1hZG57HIXgWVGOm5biMt7CI2ElUGpAYlm")
		]
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
			soon("Coleção Máscaras 3D Plus")
		]
	},
	{
		id: "natal",
		title: "Coleção de Natal",
		subtitle: "1 categoria",
		image: "/pacote-3d-natal-bonus.jpg",
		status: "ok",
		categories: [link("Coleção de Natal", "https://drive.google.com/drive/folders/11eAZdiOIstSa7Te9ubRWBFNb_OaWQc39")]
	},
	{
		id: "mascote",
		title: "Mascotes 3D",
		subtitle: "1 categoria",
		image: "/modulo-mascote-3d.webp",
		status: "ok",
		categories: [link("Mascotes 3D", "https://drive.google.com/drive/folders/1ry1s1HFnuqMfMCs00dRYJOFyQplik1eW")]
	},
	{
		id: "classicos-desenhos",
		title: "Coleção Clássicos dos Desenhos 3D",
		subtitle: "7 categorias",
		image: "/desenhos-classicos.webp",
		status: "manutencao_parcial",
		categories: [
			soon("Tartarugas Ninja"),
			soon("Os Flintstones"),
			soon("Scooby-Doo"),
			link("Ben 10", "https://drive.google.com/drive/folders/192xIwGPklPKB_HPCzr8lIYR_4i6WrzMh"),
			link("Speed Racer", "https://drive.google.com/drive/folders/1s_iC86APOx15xz_p8Jlkgx7Q0HVvIbqr"),
			soon("Coleção 01"),
			link("Coleção 02", "https://drive.google.com/drive/folders/1GHSgLVgEgew_mFTbw7R1qSM_h_xGLtt5")
		]
	},
	{
		id: "heroes-dc",
		title: "Coleção Heróis da DC 3D",
		subtitle: "1 categoria",
		image: "/pacote-herois-da-marvel.webp",
		status: "manutencao",
		categories: [soon("Pack DC")]
	},
	{
		id: "flexiveis",
		title: "Modelos Flexíveis e Articulados",
		subtitle: "2 categorias",
		image: "/pacote-articulados.jpg",
		status: "ok",
		categories: [link("Personagens Articulados", "https://drive.google.com/drive/folders/1My5S21H3nCalAAMCuQhI02_fj27vgdkj"), link("Modelos Articulados", "https://drive.google.com/drive/folders/1m4VLV0bcEmprvAOektJ5rJvVcH7aSrIK")]
	},
	{
		id: "calculadora",
		title: "Calculadora de Precificação Profissional",
		subtitle: "1 categoria",
		image: "/calculadora-precificacao.png",
		status: "ok",
		categories: [link("Planilha de Precificação (Versão Antiga)", "https://docs.google.com/spreadsheets/d/1t_g15e1boBOhbSm1caq0t5tV8ok488bbQjMyKvza54A/edit?usp=sharing")]
	},
	{
		id: "nichos-lucrativos",
		title: "Os 15 Nichos Mais Lucrativos",
		subtitle: "Guia em PDF",
		image: "/15-nichos.png",
		status: "ok",
		pdf: "/guia-nichos.pdf",
		categories: []
	},
	{
		id: "guia-vendedor",
		title: "Guia Completo do Vendedor 3D",
		subtitle: "Guia em PDF",
		image: "/guia-do-vendedor.png",
		status: "ok",
		pdf: "/guia-completo-vendedor-3d.pdf",
		categories: []
	},
	{
		id: "bordado",
		title: "Módulo Bordado",
		subtitle: "Atualização contínua",
		image: "/modulo-bordado.webp",
		status: "manutencao",
		categories: [cat("Bordado")]
	}
];
function getModule(id) {
	return MODULES.find((m) => m.id === id);
}
var STATUS_BADGE = {
	andamento: {
		label: "EM ANDAMENTO",
		className: "bg-accent text-accent-foreground"
	},
	manutencao_parcial: {
		label: "MANUTENÇÃO PARCIAL",
		className: "bg-secondary text-secondary-foreground"
	},
	manutencao: {
		label: "EM MANUTENÇÃO",
		className: "bg-secondary text-secondary-foreground"
	}
};
//#endregion
export { getModule as i, MembersHeader as n, STATUS_BADGE as r, MODULES as t };
