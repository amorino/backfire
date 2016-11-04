const path = require('path')
const webpack = require('webpack')
const postcss = require('poststylus')
const rupture = require('rupture')

module.exports = options => ({
  devtool: options.devtool,
  entry: options.entry,
  output: options.output,
  module: {
    loaders: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      loader: 'babel',
      exclude: path.join(__dirname, '..', '/node_modules/'),
    }, {
      test: /\.modernizrrc$/,
      loader: 'modernizr',
    }, {
      test: /\.css$/, // Transform all .css files required somewhere with PostCSS
      loader: options.cssLoaders,
    }, {
      test: /\.styl$/, // Transform all .styl files required somewhere with Stylus
      loader: options.stylusLoaders,
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/i, // Transform all images files required somewhere with file-loader
      loader: 'file?name=assets/[sha512:hash:base64:7].[ext]',
    }, {
      test: /\.html$/, // Transform all html files required somewhere with html-loader
      loader: 'html-loader',
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // Transform all font files required somewhere with file-loader
      loader: 'file?name=assets/[sha512:hash:base64:7].[ext]',
    }, {
      test: /\.json$/,
      loader: 'file', // Transform all .json files required somewhere with json-loader
      exclude: path.join(__dirname, '..', '/node_modules/'),
    }],
  },
  stylus: { // PostCSS plugins for Stylus
    use: [
      postcss(options.stylusPlugins),
      rupture(),
    ],
  },
  plugins: options.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin('common.js'),
  ]),
  resolve: {
    root: path.join(__dirname, '..', 'src'),
    modules: ['src', 'node_modules'],
    extensions: [
      '',
      '.js',
      '.styl',
    ],
    alias: {
      modernizr$: path.join(__dirname, '..', '.modernizrrc'),
    },
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: false, // Don't show stats in the console
  progress: true,
})
