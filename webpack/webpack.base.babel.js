const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const postcss = require('poststylus');
const rupture = require('rupture');

module.exports = (options) => ({
  devtool: options.devtool,
  entry: options.entry,
  output: options.output,
  module: {
    loaders: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      loader: 'babel',
      exclude: path.join(__dirname, '..', '/node_modules/'),
    }, {
      test: /\.css$/, // Transform all .css files required somewhere with PostCSS
      loader: options.cssLoaders
    }, {
      test: /\.styl$/, // Transform all .styl files required somewhere with Stylus
      loader: options.stylusLoaders
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/i, // Transform all images files required somewhere with file-loader
      loader: 'file?name=assets/img-[sha512:hash:base64:7].[ext]'
    }, {
      test: /\.html$/, // Transform all html files required somewhere with html-loader
      loader: 'html-loader'
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, // Transform all font files required somewhere with file-loader
      loader: 'file?name=assets/font-[sha512:hash:base64:7].[ext]'
    }, {
      test: /\.json$/,
      loaders: ['json'], // Transform all .json files required somewhere with json-loader
      exclude: path.join(__dirname, '..', '/node_modules/'),
      include: path.join(__dirname, '..', 'app')
    }]
  },
  stylus: { // PostCSS plugins for Stylus
    use: [
      postcss(options.stylusPlugins),
      rupture()
    ]
  },
  plugins: options.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]),
  postcss: (dependency) => {
    const plugins = [
      postcssImport({
        addDependencyTo: dependency
      })
    ];
    return plugins.concat(options.postcssPlugins);
  },
  resolve: {
    modulesDirectories: [
      'app',
      'containers',
      'components',
      'selectors',
      'sagas',
      'images',
      'styles',
      'fonts',
      'assets',
      'node_modules',
      'vendor'
    ],
    extensions: [
      '',
      '.js',
      '.jsx',
      '.react.js',
      '.styl'
    ]
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: false, // Don't show stats in the console
  progress: true
});
