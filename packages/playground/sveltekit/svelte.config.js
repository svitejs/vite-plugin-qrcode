/** @type {import('@sveltejs/kit').Config} */
import { qrcode } from 'vite-plugin-qrcode';

const config = {
	kit: {
		vite: {
			plugins: [qrcode()]
		}
	}
};

export default config;
