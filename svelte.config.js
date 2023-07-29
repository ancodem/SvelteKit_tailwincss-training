import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
      '@types': "./src/types/index.ts",
		}
	},
	preprocess: vitePreprocess()
};
export default config;
