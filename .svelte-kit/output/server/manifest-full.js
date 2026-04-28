export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.Brq5fTaL.js",app:"_app/immutable/entry/app.DM-Nwo9U.js",imports:["_app/immutable/entry/start.Brq5fTaL.js","_app/immutable/chunks/DGGBr2Qz.js","_app/immutable/chunks/CkdHe-eK.js","_app/immutable/chunks/DubtDbDg.js","_app/immutable/entry/app.DM-Nwo9U.js","_app/immutable/chunks/CkdHe-eK.js","_app/immutable/chunks/sAjpvYtQ.js","_app/immutable/chunks/Byucr0LV.js","_app/immutable/chunks/DubtDbDg.js","_app/immutable/chunks/gk7aPI7G.js","_app/immutable/chunks/Bsht7nY3.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
