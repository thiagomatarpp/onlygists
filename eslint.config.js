import { ESLint } from 'eslint';

export default new ESLint({
  baseConfig: {
    env: {
      browser: true,
      es2021: true,
      node: true,
    },
    extends: [
      'standard-with-typescript',
      'plugin:vue/vue3-recommended',
      '@nuxtjs/eslint-config-typescript',
      'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
      ecmaVersion: 'latest',
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: ['vue'],
    rules: {},
  },
  overrideConfig: {
    files: ['.eslintrc.{js,cjs}'],
    parserOptions: {
      sourceType: 'script',
    },
  },
});