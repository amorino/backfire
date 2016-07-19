const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// PostCSS plugins
const postcssFocus = require('postcss-focus');
const rucksack = require('rucksack-css');
const lost = require('lost');

module.exports = require('./webpack.base.babel')({
  type: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/', // Insert the production server folder
  },
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(__dirname, '..', 'app/main.js'),
  ],
  // We use ExtractTextPlugin so we get a seperate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoaders: ExtractTextPlugin.extract(
    'style',
    'css?importLoaders=1'
  ),
  stylusLoaders: ExtractTextPlugin.extract(
    'style',
    'css?modules&importLoaders=2!stylus'
  ),
  // In production, we minify our CSS with cssnano
  stylusPlugins: [
    lost(),
    postcssFocus(), // Add a :focus to every :hover
    rucksack({
      autoprefixer: true,
      fallbacks: true,
    }),
  ],
  plugins: [
    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // ...but do not show warnings in the console (there is a lot of them)
      },
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
        minifyURLs: true,
      },
      inject: true,
    }),
    // Extract the CSS into a seperate file
    new ExtractTextPlugin('css/main.css', {
      allChunks: true,
    }),
    // Set the process.env to production so React includes the production
    // version of itself
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
});
