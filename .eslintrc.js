module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    wp: 'readonly',
    jQuery: 'readonly',
    LottieInteractivity: 'readonly',
    Plyr: 'readonly',
    Chart: 'readonly',
    pluginAction: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'func-names': 'off',
    'no-console': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^__' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-process-exit': 'off',
    'no-unsafe-optional-chaining': 'off',
    'object-shorthand': 'warn',
    'class-methods-use-this': 'off',
  },
};
