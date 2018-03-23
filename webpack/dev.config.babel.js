import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DotEnv from 'dotenv-webpack'
import base from './common.config'

module.exports = base({
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: '/',
  },
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '..', 'src/main.js'),
  ],
  cssLoaders: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true,
      },
    },
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
    new DotEnv({
      path: path.resolve(__dirname, '..', '.env'),
    }),
  ],
})
