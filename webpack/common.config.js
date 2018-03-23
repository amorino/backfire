import path from 'path'
import WebappWebpackPlugin from 'webapp-webpack-plugin'

module.exports = options => ({
  entry: options.entry,
  output: options.output,
  devtool: options.devtool,
  mode: options.mode,
  optimization: {
    ...options.optimization,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.join(__dirname, '..', '/node_modules/'),
      },
      {
        test: /\.css$/,
        use: options.cssLoaders,
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.mp4$/i,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: '32000',
          mimetype: 'image/svg+xml',
          name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
        },
      },
      {
        test: /\.woff$/,
        loader: 'url-loader',
        options: {
          limit: '32000',
          mimetype: 'application/font-woff',
          name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
        },
      },
      {
        test: /\.woff2$/,
        loader: 'url-loader',
        options: {
          limit: '32000',
          mimetype: 'application/font-woff2',
          name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
        },
      },
      {
        test: /\.[ot]tf$/,
        loader: 'url-loader',
        options: {
          limit: '32000',
          mimetype: 'application/octet-stream',
          name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
        },
      },
      {
        test: /\.eot$/,
        loader: 'url-loader',
        options: {
          limit: '32000',
          mimetype: 'application/vnd.ms-fontobject',
          name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
        },
      },
      {
        type: 'javascript/auto',
        test: /\.(json)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/[name].[ext]?[sha512:hash:base64:7]',
        },
        exclude: path.join(__dirname, '..', '/node_modules/'),
      },
    ],
  },
  plugins: options.plugins.concat([
    new WebappWebpackPlugin({
      logo: path.join(__dirname, '..', 'src/favicon.png'),
      prefix: 'icons/',
      inject: true,
      background: '#ffffff',
      title: 'Backfire',
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
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  stats: true,
  performance: options.performance || {},
})
