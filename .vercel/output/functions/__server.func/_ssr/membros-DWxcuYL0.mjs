import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as getPublicModulesFn } from "./modules-data-CSHaliwB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/membros-DWxcuYL0.js
var $$splitComponentImporter = () => import("./membros-BK9Qlmmw.mjs");
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
