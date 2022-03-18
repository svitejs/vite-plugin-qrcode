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

## Options

### filter

A function that allows you to select addresses to show QR-Codes for in case you have multiple interfaces

Example:

```js
// vite.config.js
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
	plugins: [qrcode({ filter: (ip) => ip === '192.168.1.1' })]
});
```

## License

[MIT](./LICENSE)
