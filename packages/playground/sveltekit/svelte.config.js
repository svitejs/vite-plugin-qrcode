/** @type {import('@sveltejs/kit').Config} */
import { qrcode } from 'vite-plugin-qrcode';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			plugins: [qrcode()]
		}
	}
};

export default config;
