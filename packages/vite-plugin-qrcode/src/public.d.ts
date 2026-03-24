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

	filter?: (url: string) => boolean;
}
