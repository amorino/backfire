import path from 'path'
import webpack from 'webpack'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

module.exports = options => ({
  devtool: options.devtool,
  entry: options.entry,
  output: options.output,
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
      test: /\.jpe?g$|\.gif$|\.png$|\.mp4$/i,
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
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
        name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
      },
    }, {
      test: /\.woff$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/font-woff',
        name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
      },
    }, {
      test: /\.woff2$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/font-woff2',
        name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
      },
    }, {
      test: /\.[ot]tf$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/octet-stream',
        name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
      },
    }, {
      test: /\.eot$/,
      loader: 'url-loader',
      options: {
        limit: '32000',
        mimetype: 'application/vnd.ms-fontobject',
        name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
      },
    }, {
      test: /\.json$/,
      loader: 'file-loader',
      options: {
        name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
      },
      exclude: path.join(__dirname, '..', '/node_modules/'),
    }],
  },
  plugins: options.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin('common'),
    new FaviconsWebpackPlugin({
      logo: 'src/favicon.png',
      prefix: 'icons/',
      inject: true,
      // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
      background: '#ffffff',
      // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
      title: 'Backfire',
      // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ]),
  resolve: {
    extensions: ['.js'],
    modules: [path.join(__dirname, '..', 'src'), 'node_modules'],
    alias: {
      modernizr$: path.resolve(__dirname, '../.modernizrrc'),
      src: path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
    },
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: true,
  performance: options.performance || {},
})
