import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// PostCSS plugins
import postcssFocus from 'postcss-focus'
import rucksack from 'rucksack-css'
import lost from 'lost'
import base from './webpack.config.base.babel'

const PORT = 3000
const IP_ADRESS = 'localhost'

module.exports = base({
  type: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    // Compile into js/build.js
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
    publicPath: '/',
  },
  // Add hot reloading in development
  entry: [
    'babel-polyfill',
    'eventsource-polyfill', // necessary for hot reloading with IE
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${IP_ADRESS}:${PORT}`,
    'webpack/hot/only-dev-server',
    path.join(__dirname, '..', 'src/main.js'), // Start with js/app.js
  ],
  devServer: {
    hot: true,
    noInfo: true,
    contentBase: path.resolve(__dirname, '..', 'build'),
    publicPath: '/',
    port: PORT,
    historyApiFallback: true,
  },
  // Load the CSS in a style tag in development
  cssLoaders: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: true,
    },
  }],
  // Load Stylus with SourceMaps
  stylusLoaders: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: true,
      localIdentName: '[local]___[hash:base64:10]',
    },
  }, {
    loader: 'stylus-loader',
  }],
  // Process the CSS with PostCSS
  stylusPlugins: [
    lost(),
    postcssFocus(), // Add a :focus to every :hover
    rucksack({
      autoprefixer: true,
      fallbacks: true,
    }),
  ],
  // Add hot reloading
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
    }),
  ],
})
