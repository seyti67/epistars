import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		trailingSlash: 'always',
		prerender: {
			enabled: true
		},
		paths: {
			// change below to your repo name
			base: dev ? '' : '/epistars'
		}
	}
};

export default config;
