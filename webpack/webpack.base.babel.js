const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const postcss = require('poststylus');
const rucksack = require('rucksack-css');

module.exports = (options) => {
  return {
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
        test: /\.styl$/,
        loader: options.stylusLoaders
      }, {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'url-loader?limit=10000&name=assets/[name].[ext]'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url?prefix=font/&limit=10000&name=assets/[hash].[ext]'
      }, {
        test: /\.json$/,
        loaders: ['json'],
        exclude: path.join(__dirname, '..', '/node_modules/'),
        include: path.join(__dirname, '..', 'app')
      }]
    },
    stylus: {
      use: [
        postcss(options.stylusPlugins)
      ]
    },
    plugins: options.plugins.concat([
      new webpack.optimize.CommonsChunkPlugin('common.js')
    ]),
    postcss: (webpack) => {
      var plugins = [
        postcssImport({
          addDependencyTo: webpack
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
  };
};
