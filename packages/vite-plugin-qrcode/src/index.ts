import type { Plugin, ViteDevServer } from 'vite';
import qr from 'qrcode-terminal';

export function qrcode(options: PluginOptions = {}): Plugin {
	return {
		name: 'vite-plugin-qrcode',
		apply: 'serve',
		configureServer(server) {
			const _listen = server.listen;
			server.listen = function () {
				// eslint-disable-next-line prefer-rest-params
				const isRestart = arguments[1] === true;
				if (!isRestart) {
					server.httpServer?.on('listening', () => {
						setTimeout(() => logQrcode(server, options), 0);
					});
				}
				// @ts-ignore
				// eslint-disable-next-line prefer-rest-params
				return _listen.apply(this, arguments);
			};
		}
	};
}

function logQrcode(server: ViteDevServer, options: PluginOptions) {
	let networkUrls = server.resolvedUrls?.network;

	if (!networkUrls) return;

	if (options.filter) {
		networkUrls = networkUrls.filter(options.filter);
	}

	if (networkUrls.length === 0) return;

	const info = server.config.logger.info;

	info('\n  Visit page on mobile:');

	for (const url of networkUrls) {
		qr.generate(url, { small: true }, (result) => {
			info(`  ${cyan(url)}\n  ${result.replace(/\n/g, '\n  ')}`);
		});
	}
}

function cyan(str: string): string {
	return `\x1b[36m${str}\x1b[0m`;
}

export interface PluginOptions {
	/**
	 * filter list of shown QR codes. Useful if you have multiple interfaces and only need one
	 *
	 *  examples:
	 *    url => url.startsWith('http://192.')
	 *    url => !url.startsWith('http://172.)
	 *    url => url === 'http://192.168.1.70:4173'
	 *
	 * @param url {string} ip address
	 * @returns {boolean}
	 */
	// eslint-disable-next-line no-unused-vars
	filter?: (url: string) => boolean;
}
