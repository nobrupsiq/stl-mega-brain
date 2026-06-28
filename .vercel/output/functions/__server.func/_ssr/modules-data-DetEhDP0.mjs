import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DiuZA8Cx.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./esm-I6x-3bX5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/modules-data-DetEhDP0.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getPublicModulesFn = createServerFn({ method: "GET" }).handler(createSsrRpc("4b46706ac688d4013dd1befebb43d5eeefa5020975f6e13353419dff7fdef42d"));
//#endregion
export { getPublicModulesFn as t };
