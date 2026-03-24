import { defineConfig } from 'eslint/config';
import n from 'eslint-plugin-n';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier/flat';
import js from '@eslint/js';
import globals from 'globals';

export default defineConfig([
	{
		name: 'local/ignores',
		ignores: ['**/dist/**', '**/.vite-inspect/**']
	},
	js.configs.recommended,
	tseslint.configs.recommended,
	n.configs['flat/recommended-module'],
	prettierConfig,
	{
		name: 'local/language-options',
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module'
		}
	},
	{
		name: 'local/playground',
		files: ['**/*.js'],
		languageOptions: { globals: globals.browser }
	}
]);
