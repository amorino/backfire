const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');

module.exports = (options) => {
  return {
    devtool: options.devtool,
    entry: options.entry,
    output: { // Compile into js/build.js
      path: path.resolve(__dirname, '..', 'build'),
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },
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
        test: /\.json$/,
        loaders: ['json'],
        exclude: path.join(__dirname, '..', '/node_modules/'),
        include: path.join(__dirname, '..', 'app')
      }]
    },
    plugins: options.plugins,
    postcss: (webpack) => {
      return options.postcssPlugins.concat([
        postcssImport({
          glob: true, // Import all the css files...
          addDependencyTo: webpack
        })
      ])
    },
    resolve: {
      modulesDirectories: [
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
      ]
    },
    target: 'web', // Make web variables accessible to webpack, e.g. window
    stats: false, // Don't show stats in the console
    progress: true
  };
};
