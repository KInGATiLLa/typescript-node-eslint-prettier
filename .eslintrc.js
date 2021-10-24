module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  //   parserOptions:
  rules: {
    'prettier/prettier': ['error', { usePrettierrc: true }],
    '@typescript-eslint/no-unused-vars': 'off',
    semi: ['error', 'always'],
    quotes: ['warn', 'single'],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'], // Your TypeScript files extension
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],
  settings: {},
};
