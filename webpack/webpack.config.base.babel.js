import path from 'path'
import webpack from 'webpack'
import postcss from 'poststylus'
import rupture from 'rupture'

module.exports = options => ({
  devtool: options.devtool,
  entry: options.entry,
  output: options.output,
  target: options.target,
  externals: options.externals || [],
  module: {
    rules: [{
      test: /\.js$/, // Transform all .js files required somewhere with Babel
      loader: 'babel-loader',
      exclude: path.join(__dirname, '..', '/node_modules/'),
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
      test: /\.svg$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'image/svg+xml',
        name: 'assets/[sha512:hash:base64:7].[ext]',
      },
    }, {
      test: /\.woff$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/font-woff',
        name: 'assets/[sha512:hash:base64:7].[ext]',
      },
    }, {
      test: /\.woff2$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/font-woff2',
        name: 'assets/[sha512:hash:base64:7].[ext]',
      },
    }, {
      test: /\.[ot]tf$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/octet-stream',
        name: 'assets/[sha512:hash:base64:7].[ext]',
      },
    }, {
      test: /\.eot$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/vnd.ms-fontobject',
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
  stats: true,
  performance: options.performance || {},
})
