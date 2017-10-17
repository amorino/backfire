module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'redux-saga',
    'react',
    'jsx-a11y',
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
    'App': true,
    'document': true,
    'window': true,
    'FB': true,
    'twttr': true,
    'gapi': true,
    'requestAnimationFrame': true,
  },
  'rules': {
    'camelcase': ['warn'],
    'no-unused-vars': ['warn'],
    'no-console': ['off'],
    'max-len': ['off'],
    'semi': ['error', 'never'],
    'arrow-body-style': ['off'],
    'indent': [1, 2, { 'SwitchCase': 1 }],
    'react/prefer-stateless-function': ['off'],
    'react/jsx-boolean-value': ['off'],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'react/forbid-prop-types': ['off'],
    'react/no-unused-prop-types': [0],
    'import/extensions': ['off'],
    'import/no-extraneous-dependencies': ['off'],
    'no-tabs': ['off'],
    'no-return-assign': ['off'],
    'no-unused-expressions': ['off'],
    'import/no-named-default': ['off'],
    'no-underscore-dangle': ['off'],
    "jsx-a11y/media-has-caption": ['off']
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack/webpack.config.test.babel.js'
      }
    }
  }
};
