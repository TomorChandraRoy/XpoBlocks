const reactPlugin = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx'],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
        wp: 'readonly',
        jQuery: 'readonly',
        LottieInteractivity: 'readonly',
        Plyr: 'readonly',
        Chart: 'readonly',
        pluginAction: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^__' }],
      'no-console': 'off',
      'func-names': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',
      'no-process-exit': 'off',
      'no-unsafe-optional-chaining': 'off',
      'object-shorthand': 'warn',
      'class-methods-use-this': 'off',
    },
  },
];
