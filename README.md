# vite-plugin-qrcode

[![npm version](https://img.shields.io/npm/v/vite-plugin-qrcode)](https://www.npmjs.com/package/vite-plugin-qrcode)
[![CI](https://github.com/svitejs/vite-plugin-qrcode/actions/workflows/ci.yml/badge.svg)](https://github.com/svitejs/vite-plugin-qrcode/actions/workflows/ci.yml)
[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow_small.svg)](https:///pr.new/svitejs/vite-plugin-qrcode)

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
```

<img height="360" alt="CLI output" src="https://user-images.githubusercontent.com/34116392/181014171-aa511838-8122-48cf-ad9c-39f0368ee616.png" />

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
