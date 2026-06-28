import { r as __toESM } from "./_runtime.mjs";
import { g as useNavigate, h as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Route } from "./_moduleId-dFvsBZed.mjs";
import { t as Button } from "./_ssr/button-DRsC1qZi.mjs";
import { S as Download, b as FileText, i as Upload, j as ArrowLeft, r as Wrench, x as ExternalLink } from "./_libs/lucide-react.mjs";
import { n as getAccessEmail, t as MembersHeader } from "./_ssr/auth-D8kQEmHf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_moduleId-CHqivZTg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ModulePage() {
	const navigate = useNavigate();
	const { moduleId } = Route.useParams();
	const modules = Route.useLoaderData();
	const [email, setEmail] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const stored = getAccessEmail();
		if (!stored) {
			navigate({ to: "/acesso" });
			return;
		}
		setEmail(stored);
	}, [navigate]);
	if (!email) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen bg-background" });
	const module = modules.find((m) => m.id === moduleId);
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
					children: module.categories.map((category, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
						category,
						moduleId: module.id,
						index
					}, category.name))
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
function CategoryCard({ category, moduleId, index }) {
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
			children: category.maintenance || !category.hasLink ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-border bg-secondary/40 px-4 py-3 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "flex items-center justify-center gap-1.5 text-sm font-medium text-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrench, { className: "h-4 w-4" }), "Em manutenção"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-0.5 text-xs text-muted-foreground",
					children: "Link sendo atualizado no Drive"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				className: "w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/api/go?m=${encodeURIComponent(moduleId)}&c=${index}`,
					target: "_blank",
					rel: "noopener noreferrer",
					children: ["Acessar", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4" })]
				})
			})
		})]
	});
}
//#endregion
export { ModulePage as component };
