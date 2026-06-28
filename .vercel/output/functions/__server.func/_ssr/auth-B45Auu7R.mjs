//#region node_modules/.nitro/vite/services/ssr/assets/auth-B45Auu7R.js
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
//#endregion
export { getAccessEmail as n, setAccessEmail as r, clearAccessEmail as t };
