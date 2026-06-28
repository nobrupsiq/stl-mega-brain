import { r as __toESM } from "../_runtime.mjs";
import { g as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Button } from "./button-DRsC1qZi.mjs";
import { A as ArrowRight, E as Check, d as Search, f as RefreshCw, r as Wrench } from "../_libs/lucide-react.mjs";
import { n as getAccessEmail, t as MembersHeader } from "./auth-D8kQEmHf.mjs";
import { t as Input } from "./input-DicJzR9-.mjs";
import { t as Route } from "./membros-DWxcuYL0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/membros-BK9Qlmmw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
function MembersPage() {
	const navigate = useNavigate();
	const modules = Route.useLoaderData();
	const [email, setEmail] = (0, import_react.useState)(null);
	const [query, setQuery] = (0, import_react.useState)("");
	const [refreshing, setRefreshing] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const stored = getAccessEmail();
		if (!stored) {
			navigate({ to: "/acesso" });
			return;
		}
		setEmail(stored);
	}, [navigate]);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim().toLowerCase();
		if (!q) return modules;
		return modules.filter((m) => m.title.toLowerCase().includes(q) || m.subtitle.toLowerCase().includes(q));
	}, [query, modules]);
	function handleRefresh() {
		setRefreshing(true);
		navigate({ to: "/membros" }).finally(() => {
			setTimeout(() => setRefreshing(false), 600);
		});
	}
	if (!email) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen bg-background" });
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
//#endregion
export { MembersPage as component };
