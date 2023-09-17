const path = require('path');

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['airbnb', 'airbnb/hooks'],
  settings: {
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    indent: 'off',
    'react/no-typos': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-curly-newline': 'off',
    semi: 'off',
    'comma-dangle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'object-curly-newline': 'off',
    'react/forbid-prop-types': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'no-confusing-arrow': ['error', { onlyOneSimpleParam: true }],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'if', 'export', 'try'],
      },
    ],
  },
};
