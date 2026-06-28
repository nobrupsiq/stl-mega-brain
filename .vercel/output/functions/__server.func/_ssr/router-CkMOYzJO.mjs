import { r as __toESM } from "../_runtime.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime, i as Slot } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createFileRoute, d as useNavigate, f as useRouter, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ArrowRight, C as CreditCard, D as Boxes, E as Check, O as BookOpen, S as Download, T as ChevronRight, _ as LoaderCircle, a as Trophy, b as FileText, c as Star, d as Search, f as RefreshCw, g as Lock, h as LogOut, i as Upload, j as ArrowLeft, k as BadgeCheck, l as Sparkles, m as Mail, n as X, o as TrendingUp, p as Quote, r as Wrench, s as ThumbsUp, t as Zap, u as ShieldCheck, v as Gift, w as Circle, x as ExternalLink, y as Flame } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Label2, c as Root2, d as SubTrigger2, f as Trigger, i as ItemIndicator2, l as Separator2, n as Content2, o as Portal2, r as Item2, s as RadioItem2, t as CheckboxItem2, u as SubContent2 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { a as Color, c as Mesh, d as PointsMaterial, f as Scene, i as Clock, l as PerspectiveCamera, n as BufferAttribute, o as IcosahedronGeometry, p as ShaderMaterial, r as BufferGeometry, s as MathUtils, t as WebGLRenderer, u as Points } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CkMOYzJO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BA5OCfi3.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "STL MEGA BRAIN" },
			{
				name: "description",
				content: "Sell 3D printable STL files with an attractive, interactive website."
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "STL MEGA BRAIN"
			},
			{
				property: "og:description",
				content: "Sell 3D printable STL files with an attractive, interactive website."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "STL MEGA BRAIN"
			},
			{
				name: "twitter:description",
				content: "Sell 3D printable STL files with an attractive, interactive website."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
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
var STORAGE_KEY = "stl_access_email";
function getAccessEmail() {
	if (typeof window === "undefined") return null;
	try {
		return window.sessionStorage.getItem(STORAGE_KEY);
	} catch {
		return null;
	}
}
function setAccessEmail(email) {
	if (typeof window === "undefined") return;
	try {
		window.sessionStorage.setItem(STORAGE_KEY, email);
	} catch {}
}
function clearAccessEmail() {
	if (typeof window === "undefined") return;
	try {
		window.sessionStorage.removeItem(STORAGE_KEY);
	} catch {}
}
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
var Route$3 = createFileRoute("/membros")({
	head: () => ({ meta: [{ title: "Área de Membros · STL Mega Brain" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: MembersPage
});
function MembersPage() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)(null);
	const [checked, setChecked] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = getAccessEmail();
		if (!stored) {
			navigate({ to: "/acesso" });
			return;
		}
		setEmail(stored);
		setChecked(true);
	}, [navigate]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return MODULES;
		return MODULES.filter((m) => m.title.toLowerCase().includes(q) || m.subtitle.toLowerCase().includes(q));
	}, [query]);
	function handleRefresh() {
		setRefreshing(true);
		setTimeout(() => setRefreshing(false), 800);
	}
	if (!checked || !email) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen bg-background" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembersHeader, { email }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "px-4 pt-14 pb-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl",
						children: "90 MIL MODELOS 3D"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-base text-muted-foreground sm:text-lg",
						children: "Acesse todos os módulos e comece a imprimir agora mesmo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							onClick: handleRefresh,
							disabled: refreshing,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: refreshing ? "h-4 w-4 animate-spin" : "h-4 w-4" }), "Atualizar Acessos"]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto mt-8 max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: "Buscar módulos ou categorias...",
								className: "h-12 pl-10"
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "mx-auto max-w-6xl px-4 pb-20",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "py-16 text-center text-muted-foreground",
					children: [
						"Nenhum módulo encontrado para \"",
						query,
						"\"."
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: filtered.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModuleCard, { module: m }, m.id))
				})
			})
		]
	});
}
function ModuleCard({ module: m }) {
	const badge = m.status === "ok" ? null : STATUS_BADGE[m.status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/modulo/$moduleId",
		params: { moduleId: m.id },
		className: "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: m.image,
					alt: m.title,
					loading: "lazy",
					className: "h-44 w-full object-cover"
				}),
				badge && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `absolute left-3 top-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${badge.className}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-3 w-3" }), badge.label]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground shadow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-lg font-semibold leading-snug",
				children: m.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex items-center justify-between pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground",
					children: m.subtitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-sm font-semibold text-primary",
					children: ["Acessar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })]
				})]
			})]
		})]
	});
}
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = Root.displayName;
var Route$2 = createFileRoute("/acesso")({
	head: () => ({ meta: [
		{ title: "Acesso à Área de Membros · STL Mega Brain" },
		{
			name: "description",
			content: "Área de acesso exclusiva para clientes do Pack STL."
		},
		{
			name: "robots",
			content: "noindex, nofollow"
		}
	] }),
	component: AccessPage
});
function AccessPage() {
	const navigate = useNavigate();
	const [email, setEmail] = (0, import_react.useState)("");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	async function handleSubmit(e) {
		e.preventDefault();
		setError(null);
		const value = email.trim().toLowerCase();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
			setError("Digite um e-mail válido.");
			return;
		}
		setLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 500));
			setAccessEmail(value);
			navigate({ to: "/membros" });
		} finally {
			setLoading(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative flex min-h-screen items-center justify-center overflow-hidden bg-hero px-4 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -top-32 -left-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card/80 p-8 shadow-glow backdrop-blur-sm sm:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 ring-1 ring-primary/30",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boxes, { className: "h-7 w-7 text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-2xl font-bold tracking-tight",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gradient-primary",
										children: "STL MEGA BRAIN"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 text-xl font-semibold text-foreground",
									children: "Acesso à Área de Membros"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: "Faça login usando o mesmo e-mail utilizado na hora da compra."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: handleSubmit,
							className: "mt-8 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "email",
										className: "text-sm font-medium",
										children: "E-mail"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "email",
											type: "email",
											inputMode: "email",
											autoComplete: "email",
											placeholder: "seu@email.com",
											value: email,
											onChange: (e) => setEmail(e.target.value),
											disabled: loading,
											required: true,
											className: "h-11 pl-9"
										})]
									})]
								}),
								error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-destructive",
									role: "alert",
									children: error
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									size: "lg",
									disabled: loading,
									className: "h-11 w-full text-base font-semibold",
									children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Entrando..."] }) : "ENTRAR"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), "Acesso exclusivo para clientes."]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 text-center text-xs text-muted-foreground",
					children: [
						"Qualquer dúvida, envie um e-mail para",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:ultimatepackstl@gmail.com",
							className: "text-primary hover:underline",
							children: "ultimatepackstl@gmail.com"
						})
					]
				})]
			})
		]
	});
}
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
var CHECKOUT_URL = "https://ggcheckout.app/";
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
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Pack STL Definitivo · +90 mil arquivos para impressão 3D por R$29,90" },
		{
			name: "description",
			content: "Mais de 90 mil arquivos STL testados e organizados por nicho. Pack com 2 bônus exclusivos por R$29,90. Acesso imediato."
		},
		{
			property: "og:title",
			content: "Pack STL Definitivo · +90 mil arquivos 3D"
		},
		{
			property: "og:description",
			content: "Transforme sua impressora 3D em uma máquina de lucro. Pack + 2 bônus por R$29,90."
		}
	] }),
	component: Index
});
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LandingPage, {});
}
var Route = createFileRoute("/modulo/$moduleId")({
	head: () => ({ meta: [{ title: "Módulo · STL Mega Brain" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	component: ModulePage
});
function ModulePage() {
	const navigate = useNavigate();
	const { moduleId } = Route.useParams();
	const [email, setEmail] = (0, import_react.useState)(null);
	const [checked, setChecked] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = getAccessEmail();
		if (!stored) {
			navigate({ to: "/acesso" });
			return;
		}
		setEmail(stored);
		setChecked(true);
	}, [navigate]);
	if (!checked || !email) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen bg-background" });
	const module = getModule(moduleId);
	if (!module) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembersHeader, { email }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-24 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold",
					children: "Módulo não encontrado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-muted-foreground",
					children: "Esse módulo não existe ou foi removido."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/membros",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Voltar para os módulos"]
					})
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MembersHeader, { email }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "mx-auto max-w-6xl px-4 pb-20 pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/membros",
					className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), "Voltar"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-4 overflow-hidden rounded-2xl border border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: module.image,
							alt: module.title,
							className: "h-56 w-full object-cover sm:h-72"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 p-6 sm:p-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl font-bold tracking-tight sm:text-5xl",
								children: module.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-3 inline-flex rounded-full bg-primary/15 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-primary/30",
								children: module.pdf ? "PDF Disponível" : `${module.categories.length} ${module.categories.length === 1 ? "categoria" : "categorias"} disponíveis`
							})]
						})
					]
				}),
				module.status === "manutencao_parcial" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaintenanceNotice, {
					title: "Manutenção parcial",
					text: "Algumas categorias deste módulo estão com links do Drive sendo atualizados. As demais continuam disponíveis normalmente."
				}),
				module.status === "manutencao" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaintenanceNotice, {
					title: "Em manutenção",
					text: "Os links deste módulo estão sendo atualizados no Google Drive. Volte em breve — estamos reorganizando o conteúdo."
				}),
				module.pdf ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PdfGuide, {
					title: module.title,
					pdf: module.pdf
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-10 text-xl font-bold",
					children: "Categorias Disponíveis"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: module.categories.map((category) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, { category }, category.name))
				})] })
			]
		})]
	});
}
function MaintenanceNotice({ title, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex items-start gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold text-accent",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: text
		})] })]
	});
}
function PdfGuide({ title, pdf }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "flex items-center gap-2 text-xl font-bold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5 text-primary" }), "Pré-visualização do Guia"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-hidden rounded-xl border border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("object", {
					data: `${pdf}#toolbar=0&navpanes=0`,
					type: "application/pdf",
					className: "h-[70vh] w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-[70vh] flex-col items-center justify-center gap-3 p-8 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-10 w-10 text-muted-foreground" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Não foi possível exibir a pré-visualização aqui."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: pdf,
									target: "_blank",
									rel: "noopener noreferrer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" }), "Abrir o PDF em nova aba"]
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "lg",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: pdf,
						target: "_blank",
						rel: "noopener noreferrer",
						download: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), "Baixar PDF Completo"]
					})
				})
			})
		]
	});
}
function CategoryCard({ category }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col rounded-xl border border-border bg-card p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-5 w-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-base font-bold uppercase tracking-wide",
				children: category.name
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-5 space-y-3",
			children: category.maintenance ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border bg-secondary/40 px-4 py-3 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center justify-center gap-1.5 text-sm font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-4 w-4" }), "Em manutenção"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: "Link sendo atualizado no Drive"
				})]
			}) : category.links.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: i === 0 ? "default" : "outline",
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: link.href,
					target: "_blank",
					rel: "noopener noreferrer",
					children: [link.label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
				})
			}, link.label))
		})]
	});
}
var MembrosRoute = Route$3.update({
	id: "/membros",
	path: "/membros",
	getParentRoute: () => Route$4
});
var AcessoRoute = Route$2.update({
	id: "/acesso",
	path: "/acesso",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	AcessoRoute,
	MembrosRoute,
	ModuloModuleIdRoute: Route.update({
		id: "/modulo/$moduleId",
		path: "/modulo/$moduleId",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
