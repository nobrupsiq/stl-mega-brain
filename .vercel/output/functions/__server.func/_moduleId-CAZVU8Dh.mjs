import { c as createFileRoute, s as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as getPublicModulesFn } from "./_ssr/modules-data-DetEhDP0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_moduleId-CAZVU8Dh.js
var $$splitComponentImporter = () => import("./_moduleId-hEIZHoCU.mjs");
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
