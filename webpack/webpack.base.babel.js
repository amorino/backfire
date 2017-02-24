const path = require('path')
const webpack = require('webpack')
const postcss = require('poststylus')
const rupture = require('rupture')

module.exports = options => ({
  devtool: options.devtool,
  entry: options.entry,
  output: options.output,
  module: {
    rules: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      loader: 'babel-loader',
      exclude: path.join(__dirname, '..', '/node_modules/'),
      options: {
        presets: ['react', 'es2015', 'stage-0'],
        env: {
          development: {
            presets: ['react-hmre'],
          },
        },
      },
    }, {
      test: /\.modernizrrc.js$/,
      loader: 'modernizr-loader',
    },
    {
      test: /\.modernizrrc(\.json)?$/,
      use: [
        'modernizr-loader',
        'json-loader',
      ],
    }, {
      test: /\.css$/,
      use: options.cssLoaders,
    }, {
      test: /\.styl$/,
      use: options.stylusLoaders,
    }, {
      test: /\.jpe?g$|\.gif$|\.png$/i,
      loader: 'file-loader',
      options: {
        name: 'assets/[sha512:hash:base64:7].[ext]',
      },
    }, {
      test: /\.html$/,
      loader: 'html-loader',
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader',
      options: {
        name: 'assets/[sha512:hash:base64:7].[ext]',
      },
    }, {
      test: /\.json$/,
      loader: 'file-loader',
      options: {
        name: 'assets/[sha512:hash:base64:7].[ext]',
      },
      exclude: path.join(__dirname, '..', '/node_modules/'),
    }, {
      test: /\.(glsl|frag|vert)$/,
      loader: 'raw-loader',
      exclude: path.join(__dirname, '..', '/node_modules/'),
    }, {
      test: /\.(glsl|frag|vert)$/,
      loader: 'glslify-loader',
      exclude: path.join(__dirname, '..', '/node_modules/'),
    }],
  },
  plugins: options.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.LoaderOptionsPlugin({
      test: /\.styl$/,
      stylus: {
        default: {
          use: [
            postcss(options.stylusPlugins),
            rupture(),
          ],
        },
      },
    }),
  ]),
  resolve: {
    extensions: ['.js', '.styl'],
    modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
    alias: {
      modernizr$: path.resolve(__dirname, '../.modernizrrc'),
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../src/assets'),
    },
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: true,
  performance: options.performance || {},
})
