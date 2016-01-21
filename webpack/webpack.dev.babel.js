const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');
const postcssMixins = require('postcss-mixins');
const rucksack = require('rucksack-css');
const lost = require('lost');

module.exports = require('./webpack.base.babel')({
  type: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: { // Compile into js/build.js
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/'
  },
  // Add hot reloading in development
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    path.join(__dirname, '..', 'app/app.js') // Start with js/app.js
  ],
  // Load the CSS in a style tag in development
  cssLoaders: 'style!css?importLoaders=1&sourceMap!postcss',
  // Process the CSS with PostCSS
  postcssPlugins: [
    lost(),
    postcssSimpleVars(),
    postcssNested(),
    postcssMixins(),
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE > 10'] // ...based on this browser list
    }),
    rucksack(),
    postcssReporter({ // Posts messages from plugins to the terminal
      clearMessages: true
    })
  ],
  // Add hot reloading
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true // Inject all files that are generated by webpack, e.g. bundle.js
    })
  ]
});
