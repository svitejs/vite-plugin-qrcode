import { defineConfig } from 'vite';
// eslint-disable-next-line node/no-missing-import
import { sveltekit } from '@sveltejs/kit/vite';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
	plugins: [sveltekit(), qrcode()]
});
