import { f as lazyRouteComponent, p as createFileRoute } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as getPublicModulesFn } from "./_ssr/modules-data-CSHaliwB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_moduleId-dFvsBZed.js
var $$splitComponentImporter = () => import("./_moduleId-CHqivZTg.mjs");
var Route = createFileRoute("/modulo/$moduleId")({
	head: () => ({ meta: [{ title: "Módulo · STL Mega Brain" }, {
		name: "robots",
		content: "noindex, nofollow"
	}] }),
	loader: () => getPublicModulesFn(),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
