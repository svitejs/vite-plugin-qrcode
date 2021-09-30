module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:node/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'prettier'
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	plugins: ['@typescript-eslint', 'svelte3', 'html', 'markdown'],
	settings: {
		'svelte3/typescript': require('typescript'),
		'svelte3/ignore-styles': (attrs) =>
			(attrs.type && attrs.type !== 'text/css') || (attrs.lang && attrs.lang !== 'css')
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	rules: {
		'no-console': 'off',
		'no-debugger': 'error',
		'node/no-deprecated-api': 'off',
		'node/no-unpublished-import': 'off',
		'node/no-unpublished-require': 'off',
		'node/no-unsupported-features/es-syntax': 'off',
		'no-process-exit': 'off',
		'node/no-missing-import': [
			'error',
			{
				tryExtensions: ['.js', '.ts', '.json', '.node']
			}
		]
	},
	overrides: [
		{
			files: ['**/*.svelte'],
			env: {
				es6: true,
				browser: true,
				node: false
			},
			processor: 'svelte3/svelte3',
			rules: {
				'import/first': 'off',
				'import/no-duplicates': 'off',
				'import/no-mutable-exports': 'off',
				'import/no-unresolved': 'off'
			}
		},
		{
			files: ['**/*.svx', '**/*.md'],
			processor: 'markdown/markdown',
			rules: {
				'no-undef': 'off',
				'no-unused-vars': 'off',
				'no-unused-labels': 'off',
				'no-console': 'off',
				'padded-blocks': 'off',
				'node/no-missing-import': 'off',
				'node/no-extraneous-require': 'off',
				'import/no-unresolved': 'off',
				'node/no-missing-require': 'off'
			}
		},
		{
			files: ['**/*.svx/*.**', '**/*.md/*.**'],
			rules: {
				'no-undef': 'off',
				'no-unused-vars': 'off',
				'no-unused-labels': 'off',
				'no-console': 'off',
				'padded-blocks': 'off',
				'node/no-missing-import': 'off',
				'node/no-extraneous-require': 'off',
				'import/no-unresolved': 'off',
				'node/no-missing-require': 'off'
			}
		},
		{
			files: ['scripts/**'],
			env: {
				node: true,
				browser: false
			}
		}
	]
};
