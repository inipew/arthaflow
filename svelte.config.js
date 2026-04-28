import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// See https://kit.svelte.dev/docs/adapter-cloudflare#options for a list of options
		}),
    alias: {
      '$components': './src/lib/components',
    }
	}
};

export default config;
