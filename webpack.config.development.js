var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client',
    './app/app'
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
  resolve: {
    extensions: ['', '.js', '.json', '.css', '.scss'],
    modulesDirectories: ['app', 'node_modules', 'vendor', 'bower_directories']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1')
    }, {
      test: /\.scss$/,
      loader: 'style!css?importLoaders=2&sourceMap!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
    }, {
      test: /\.styl$/,
      loader: 'style!css?importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:10]!stylus'
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
        'file?name=[name].[ext]'
      ]
    }, {
      test: /\.json$/,
      loaders: ['json'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'app')
    }]
  }
};
