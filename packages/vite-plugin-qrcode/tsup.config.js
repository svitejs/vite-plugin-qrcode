/** @type {import("tsup").Options} */
export const tsup = {
	entryPoints: ['src/index.ts'],
	format: ['esm', 'cjs'],
	sourcemap: true,
	splitting: false,
	clean: true
};
