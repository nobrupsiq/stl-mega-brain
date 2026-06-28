import { c as createFileRoute, s as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getPublicModulesFn } from "./modules-data-DetEhDP0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/membros-BJYLFujP.js
var $$splitComponentImporter = () => import("./membros-8Hm0ez1j.mjs");
var Route = createFileRoute("/membros")({
	head: () => ({ meta: [{ title: "Área de Membros · STL Mega Brain" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	loader: () => getPublicModulesFn(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
