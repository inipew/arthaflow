import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BAosIlnq.js","_app/immutable/chunks/Byucr0LV.js","_app/immutable/chunks/CkdHe-eK.js","_app/immutable/chunks/DYu80jsF.js","_app/immutable/chunks/Bsht7nY3.js","_app/immutable/chunks/DGGBr2Qz.js","_app/immutable/chunks/DubtDbDg.js","_app/immutable/chunks/sAjpvYtQ.js","_app/immutable/chunks/gk7aPI7G.js"];
export const stylesheets = ["_app/immutable/assets/2.CsXNiGn8.css"];
export const fonts = [];
