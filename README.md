# vite-plugin-qrcode

[![npm version](https://img.shields.io/npm/v/vite-plugin-qrcode)](https://www.npmjs.com/package/vite-plugin-qrcode)
[![CI](https://github.com/svitejs/vite-plugin-qrcode/actions/workflows/ci.yml/badge.svg)](https://github.com/svitejs/vite-plugin-qrcode/actions/workflows/ci.yml)

Show QR code on server start.

## Installation

```bash
npm install --save-dev vite-plugin-qrcode
```

## Usage

```js
// vite.config.js
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
	plugins: [
		qrcode() // only applies in dev mode
	]
});
```

```bash
# start vite with host to show qrcode
vite --host

  vite v2.6.1 dev server running at:

  > Local:    http://localhost:3000/
  > Network:  http://192.168.2.169:3000/

  ready in 186ms.

  Visit page on mobile:
  http://192.168.2.169:3000/
  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
  █ ▄▄▄▄▄ ██▄▄ ▀▄██▄█ ▄▄▄▄▄ █
  █ █   █ █▀▄  █▀ ▀ █ █   █ █
  █ █▄▄▄█ █▄▀ █▄▀ ███ █▄▄▄█ █
  █▄▄▄▄▄▄▄█▄▀▄█ █▄▀▄█▄▄▄▄▄▄▄█
  █ ▄██▀ ▄ █▄ █▄ █  ▀██  ▀▀██
  ██▄▀▀█▀▄▄█▄▀ ▄█▀ ▀█▄▄▀ █▄ █
  █ ▀ ▄▄ ▄██▄ █ ▀ ▀▄▄▄████▀▄█
  █ █▀▄█ ▄    ▀█▄▀▄▀▄█▄▀▄▀▄ █
  █▄█████▄█▀█▄  ▄▀▀ ▄▄▄ █ ███
  █ ▄▄▄▄▄ █ ██▄ █ █ █▄█ ▄██▄█
  █ █   █ ██▀ ▀▀▄█▄▄▄  ▄ ▄▀▀█
  █ █▄▄▄█ █▀█▄█ ██▀▀▄▀▀▀█▄█ █
  █▄▄▄▄▄▄▄█▄██▄██▄▄▄█▄██▄██▄█

```

## Packages

| Package                                           | Changelog                                             |
| ------------------------------------------------- | ----------------------------------------------------- |
| [vite-plugin-qrcode](packages/vite-plugin-qrcode) | [Changelog](packages/vite-plugin-qrcode/CHANGELOG.md) |

## Development

- `pnpm i` to install dependencies
- `pnpm dev` to run development build
- `pnpm test` to run tests
- `pnpm build` to run build

## License

[MIT](./LICENSE)
