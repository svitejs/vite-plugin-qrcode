import os from 'os';
import { AddressInfo } from 'net';
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
	const networkUrls = getNetworkUrls(server, options);

	if (networkUrls.length === 0) return;

	const info = server.config.logger.info;

	info('  Visit page on mobile:');

	for (const url of networkUrls) {
		qr.generate(url, { small: true }, (result) => {
			info(`  ${cyan(url)}\n  ${result.replace(/\n/g, '\n  ')}`);
		});
	}
}

function cyan(str: string): string {
	return `\x1b[36m${str}\x1b[0m`;
}

// Referenced from https://github.com/vitejs/vite/blob/77447496704e61cdb68b5788d8d79f19a2d895f1/packages/vite/src/node/logger.ts#L143
function getNetworkUrls(server: ViteDevServer, options: PluginOptions): string[] {
	const address = server.httpServer?.address();

	if (!isAddressInfo(address)) return [];

	const hostname = resolveHostname(server.config.server.host);

	if (hostname.host === '127.0.0.1') return [];

	const protocol = server.config.server.https ? 'https' : 'http';
	const port = address.port;
	const base = server.config.base;

	return Object.values(os.networkInterfaces())
		.flatMap((nInterface) => nInterface ?? [])
		.filter(
			(detail) =>
				detail &&
				detail.address &&
				// @ts-ignore node18 returns a number
				(detail.family === 'IPv4' || detail.family === 4) &&
				!detail.address.includes('127.0.0.1') &&
				(!options.filter || options.filter(detail.address))
		)
		.map((detail) => `${protocol}://${detail.address}:${port}${base}`);
}

function isAddressInfo(v: any): v is AddressInfo {
	return v.address;
}

// Copied from https://github.com/vitejs/vite/blob/77447496704e61cdb68b5788d8d79f19a2d895f1/packages/vite/src/node/utils.ts#L531
function resolveHostname(optionsHost: string | boolean | undefined): Hostname {
	let host: string | undefined;
	if (optionsHost === undefined || optionsHost === false || optionsHost === 'localhost') {
		// Use a secure default
		host = '127.0.0.1';
	} else if (optionsHost === true) {
		// If passed --host in the CLI without arguments
		host = undefined; // undefined typically means 0.0.0.0 or :: (listen on all IPs)
	} else {
		host = optionsHost;
	}

	// Set host name to localhost when possible, unless the user explicitly asked for '127.0.0.1'
	const name =
		(optionsHost !== '127.0.0.1' && host === '127.0.0.1') ||
		host === '0.0.0.0' ||
		host === '::' ||
		host === undefined
			? 'localhost'
			: host;

	return { host, name };
}

interface Hostname {
	// undefined sets the default behaviour of server.listen
	host: string | undefined;
	// resolve to localhost when possible
	name: string;
}

export interface PluginOptions {
	/**
	 * filter list of shown QR codes. Useful if you have multiple interfaces and only need one
	 *
	 *  examples:
	 *    ip => ip.startsWith('192.')
	 *    ip => !ip.startsWith('172.)
	 *    ip => ip === '192.168.1.70'
	 *
	 * @param ip {string} ip address
	 * @returns {boolean}
	 */
	// eslint-disable-next-line no-unused-vars
	filter?: (ip: string) => boolean;
}
