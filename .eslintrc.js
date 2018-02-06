module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'redux-saga',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
		node: true,
		browser: true,
  },
  'globals': {
    'System': true,
    'document': true,
    'window': true,
    'FB': true,
    'twttr': true,
    'gapi': true,
    'requestAnimationFrame': true,
  },
  'rules': {
    'object-curly-newline': [0],
    'camelcase': [1],
    'no-unused-vars': [1],
    'no-console': [0],
    'max-len': [0],
    'semi': [2, 'never'],
    'arrow-body-style': [0],
    'indent': [1, 2, { 'SwitchCase': 1 }],
    'function-paren-newline': ['error', 'consistent'],
    'no-tabs': [0],
    'no-return-assign': [0],
    'no-unused-expressions': [0],
    'no-underscore-dangle': [0],
    'react/prefer-stateless-function': [0],
    'react/jsx-boolean-value': [0],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/forbid-prop-types': [0],
    'react/no-unused-prop-types': [0],
    'import/extensions': [0],
    'import/no-extraneous-dependencies': [0],
    'import/no-named-default': [0],
    "jsx-a11y/media-has-caption": [0],
    "jsx-a11y/anchor-is-valid": [2, {
        "components": [ "Link" ],
        "specialLink": [ "to", "hrefLeft", "hrefRight" ],
        "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.config.test.babel.js'
      }
    }
  }
};
