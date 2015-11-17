var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1')
    }, {
      test: /\.scss$/,
      loader: 'style!css?importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
    }, {
      test: /\.styl$/,
      loader: 'style!css?importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:10]!stylus'
      // loader: 'style!css?importLoaders=2&modules&sourceMap&localIdentName=[local]___[hash:base64:10]!stylus'
    }, {
      test: /\.json$/,
      loaders: ['json'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    }]
  }
};
