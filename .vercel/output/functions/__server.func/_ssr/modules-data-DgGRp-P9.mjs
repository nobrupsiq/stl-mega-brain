import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./esm-I6x-3bX5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/modules-data-DgGRp-P9.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getPublicModulesFn_createServerFn_handler = createServerRpc({
	id: "4b46706ac688d4013dd1befebb43d5eeefa5020975f6e13353419dff7fdef42d",
	name: "getPublicModulesFn",
	filename: "src/lib/modules-data.ts"
}, (opts) => getPublicModulesFn.__executeServer(opts));
var getPublicModulesFn = createServerFn({ method: "GET" }).handler(getPublicModulesFn_createServerFn_handler, async () => {
	const { getPublicModules } = await import("./modules.server-BVLJfUBY.mjs");
	return getPublicModules();
});
//#endregion
export { getPublicModulesFn_createServerFn_handler };
