const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');

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
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'url-loader?limit=10000'
      }, {
        test: /\.html$/,
        loader: 'html-loader'
      }, {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'url?prefix=font/&limit=10000'
      }, {
        test: /\.json$/,
        loaders: ['json'],
        exclude: path.join(__dirname, '..', '/node_modules/'),
        include: path.join(__dirname, '..', 'app')
      }]
    },
    plugins: options.plugins,
    postcss: (webpack) => {
      var plugins = [
        postcssImport({
          glob: true, // Import all the css files...
          addDependencyTo: webpack
        })
      ];
      return plugins.concat(options.postcssPlugins);
    },
    resolve: {
      modulesDirectories: [
        'app',
        'assets',
        'containers',
        'components',
        'node_modules',
        'vendor',
        'bower_directories'
      ],
      extensions: [
        '',
        '.js',
        '.jsx',
        '.react.js',
        '.json'
      ],
      alias: {}
    },
    target: 'web', // Make web variables accessible to webpack, e.g. window
    stats: false, // Don't show stats in the console
    progress: true
  };
};
