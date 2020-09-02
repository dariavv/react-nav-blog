module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/prop-types': 0,
    'global-require': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'import/prefer-default-export': 0,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          navigations: './src/navigations',
          modules: './src/modules',
          screens: './src/screens',
        },
      },
    },
  },
};
