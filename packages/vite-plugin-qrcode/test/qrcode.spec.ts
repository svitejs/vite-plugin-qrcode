import { afterEach, describe, expect, test, vi } from 'vitest';
import type { ViteDevServer } from 'vite';
import { createServer } from 'vite';
// eslint-disable-next-line n/no-missing-import
import { qrcode } from '../src/index.js';

describe('vite-plugin-qrcode', () => {
	let server: ViteDevServer;

	afterEach(async () => {
		vi.restoreAllMocks();
		await server?.close();
	});

	test('dev logs at start', async () => {
		expect.assertions(1);

		server = await createServer({
			server: {
				ws: false,
				host: true
			},
			plugins: [qrcode()]
		});
		const infoSpy = vi.spyOn(server.config.logger, 'info');
		await server.listen();
		await new Promise((r) => setTimeout(r, 100));
		expect(infoSpy).toHaveBeenCalledWith('\n  Visit page on mobile:');
	});
});
