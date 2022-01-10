module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    '@react-native-community',
    'prettier',
  ],
  settings: {
    'import/core-modules': ['@expo/vector-icons'],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-uses-react': 0,
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'react/style-prop-object': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/unbound-method': 0,
  },
};
