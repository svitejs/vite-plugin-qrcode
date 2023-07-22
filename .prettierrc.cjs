module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	plugins: ["prettier-plugin-svelte"],
	overrides: [
		{
			files: '**/*.svx',
			options: { parser: 'markdown' }
		},
		{
			files: '**/*.ts',
			options: { parser: 'typescript' }
		},
		{
			files: '**/CHANGELOG.md',
			options: {
				requirePragma: true
			}
		},
		{
			files: '**/package.json',
			options: {
				useTabs: false,
				tabWidth: 2
			}
		}
	]
};
