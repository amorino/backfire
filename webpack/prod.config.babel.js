import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import UglifyJSPlugin from 'uglifyjs-webpack-plugin'
import DotEnv from 'dotenv-webpack'
import base from './common.config'

module.exports = base({
  mode: 'production',
  devtool: 'hidden-source-map',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'js/[name].js?[hash]',
    chunkFilename: 'js/[name].js?[hash]',
    publicPath: '/',
  },
  entry: [
    'babel-polyfill',
    path.join(__dirname, '..', 'src/main.js'),
  ],
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  cssLoaders: [
    MiniCssExtractPlugin.loader,
    'css-loader',
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css?[hash]',
      allChunks: true,
    }),
    new DotEnv({
      path: path.resolve(__dirname, '..', '.env'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
})
