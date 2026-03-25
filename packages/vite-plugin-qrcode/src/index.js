import { renderUnicodeCompact } from 'uqr';

/**
 *
 * @param {Partial<import('./public.d.ts').PluginOptions>} [options]
 * @returns {import('vite').Plugin} vite-plugin-qrcode
 */
export function qrcode(options = {}) {
	/** @type {import('vite').Plugin} */
	const plugin = {
		name: 'vite-plugin-qrcode',
		apply: 'serve',
		configureServer(server) {
			const _listen = server.listen;
			server.listen = function () {
				const isRestart = arguments[1] === true;
				if (!isRestart) {
					server.httpServer?.on('listening', () => {
						setTimeout(() => logQrcode(server, options), 0);
					});
				}
				// @ts-expect-error arguments
				return _listen.apply(this, arguments);
			};
		},
		configurePreviewServer(server) {
			server.httpServer?.on('listening', () => {
				setTimeout(() => logQrcode(server, options), 0);
			});
		}
	};
	return plugin;
}

/**
 *
 * @param {import('vite').ViteDevServer | import('vite').PreviewServer } server
 * @param {import('./public.d.ts').PluginOptions} options
 */
function logQrcode(server, options) {
	let networkUrls = server.resolvedUrls?.network;

	if (!networkUrls) return;

	if (options.filter) {
		networkUrls = networkUrls.filter(options.filter);
	}

	if (networkUrls.length === 0) return;

	const info = server.config.logger.info;

	info('\n  Visit page on mobile:');

	for (const url of networkUrls) {
		const qr = renderUnicodeCompact(url);
		info(`  ${cyan(url)}\n  ${qr.replace(/\n/g, '\n  ')}`);
	}
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function cyan(str) {
	return `\x1b[36m${str}\x1b[0m`;
}
