const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// PostCSS plugins
const cssnext = require('postcss-cssnext');
const postcssFocus = require('postcss-focus');
const postcssReporter = require('postcss-reporter');
const cssnano = require('cssnano');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssMixins = require('postcss-mixins');
const rucksack = require('rucksack-css');
const lost = require('lost');

module.exports = require('./webpack.base.babel')({
  type: 'development',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/' // Insert the production server folder
  },
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(__dirname, '..', 'app/app.js')
  ],
  // We use ExtractTextPlugin so we get a seperate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoaders: ExtractTextPlugin.extract(
    'style',
    'css?importLoaders=1!postcss'
  ),
  stylusLoaders: ExtractTextPlugin.extract(
    'style',
    'css?importLoaders=1!stylus'
  ),
  // In production, we minify our CSS with cssnano
  postcssPlugins: [
    lost(),
    rucksack(),
    postcssNested(),
    postcssSimpleVars({
      silent: false
    }),
    postcssMixins(),
    postcssFocus(),
    cssnext({
      browsers: ['last 2 versions', 'IE 8']
    }),
    cssnano({
      autoprefixer: false, // cssnext already runs autoprefixer
      discardUnused: false, // unsafe, see http://mxs.is/googmr
      zindex: false // unsafe, see http://mxs.is/googmq
    }),
    postcssReporter({
      clearMessages: true
    })
  ],
  stylusPlugins: [
    lost(),
    postcssFocus(), // Add a :focus to every :hover
    cssnext({ // Allow future CSS features to be used, also auto-prefixes the CSS...
      browsers: ['last 2 versions', 'IE 8'] // ...based on this browser list
    }),
    rucksack({
      autoprefixer: true
    })
  ],
  plugins: [
    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false // ...but do not show warnings in the console (there is a lot of them)
      }
    }),
    // Minify and optimize the index.html
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      inject: true
    }),
    // Extract the CSS into a seperate file
    new ExtractTextPlugin('css/style.css'),
    // Set the process.env to production so React includes the production
    // version of itself
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
});
