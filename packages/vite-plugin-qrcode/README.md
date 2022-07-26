# vite-plugin-qrcode

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

## Options

### filter

A function that allows you to select addresses to show QR-Codes for in case you have multiple interfaces

Example:

```js
// vite.config.js
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
	plugins: [qrcode({ filter: (url) => url === 'http://192.168.1.1:4173' })]
});
```

## License

[MIT](./LICENSE)
