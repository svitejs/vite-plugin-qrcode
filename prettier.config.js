export default {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	overrides: [
		{
			files: '**/*.ts',
			options: { parser: 'typescript' }
		},
		{
			files: [
				'**/CHANGELOG.md',
				'.github/**',
				'**/types/index.d.ts',
				'**/types/index.d.ts.map',
				'**/pnpm-lock.yaml',
				'.changeset/pre.json',
				'**/vite.config.js.timestamp-*.mjs',
				'**/.vite-inspect/**'
			],
			options: {
				rangeEnd: 0 // do not read file content
			}
		},
		{
			files: ['**/package.json', '**/README.md', 'docs/**/*.md', '.changeset/pre.json'],
			options: {
				useTabs: false,
				tabWidth: 2
			}
		}
	]
};
