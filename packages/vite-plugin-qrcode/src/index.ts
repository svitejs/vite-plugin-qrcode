import os from 'os';
import { AddressInfo } from 'net';
import { Plugin, ViteDevServer } from 'vite';
import qr from 'qrcode-terminal';

export function qrcode(): Plugin {
	return {
		name: 'vite-plugin-qrcode',
		apply: 'serve',
		configureServer(server) {
			let timer: NodeJS.Timeout;

			server.httpServer?.on('listening', () => {
				clearTimeout(timer);
				timer = setTimeout(() => logQrcode(server), 0);
			});
		}
	};
}

function logQrcode(server: ViteDevServer) {
	const networkUrls = getNetworkUrls(server);

	if (networkUrls.length === 0) return;

	const info = server.config.logger.info;

	info('  Visit page on mobile:');

	for (const url of networkUrls) {
		qr.generate(url, { small: true }, (result) => {
			info(`  ${result.replace(/\n/g, '\n  ')}`);
		});
	}
}

// Referenced from https://github.com/vitejs/vite/blob/77447496704e61cdb68b5788d8d79f19a2d895f1/packages/vite/src/node/logger.ts#L143
function getNetworkUrls(server: ViteDevServer): string[] {
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
				detail.family === 'IPv4' &&
				!detail.address.includes('127.0.0.1')
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
