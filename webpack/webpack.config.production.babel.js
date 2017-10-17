import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import DotEnv from 'dotenv-webpack'

// PostCSS plugins
import postcssFocus from 'postcss-focus'
import rucksack from 'rucksack-css'
import lost from 'lost'
import hoverPrfx from 'postcss-hover-prefix'
import base from './webpack.config.base.babel'

module.exports = base({
  type: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: 'js/[name].js?[hash]',
    chunkFilename: 'js/[name].chunk.js?[hash]',
    publicPath: '/', // Insert the production server folder
  },
  // In production, we skip all hot-reloading stuff
  entry: [
    'babel-polyfill',
    path.join(__dirname, '..', 'src/main.js'),
  ],
  // We use ExtractTextPlugin so we get a seperate CSS file instead
  // of the CSS being in the JS and injected as a style tag
  cssLoaders: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
        sourceMap: true,
      },
    },
  }),
  // Load Stylus with SourceMaps
  stylusLoaders: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [{
      loader: 'css-loader',
      options: {
        importLoaders: 2,
        sourceMap: true,
        localIdentName: '[local]___[hash:base64:10]',
      },
    }, {
      loader: 'stylus-loader',
    }],
  }),
  // In production, we minify our CSS with cssnano
  stylusPlugins: [
    lost(),
    postcssFocus(), // Add a :focus to every :hover
    hoverPrfx('pointerevents'),
    rucksack({
      autoprefixer: true,
      fallbacks: true,
    }),
  ],
  plugins: [
    // Minify and optimize the JavaScript
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true,
        warnings: false,
      },
    }),

    // Minify and optimize the index.html
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
    // Extract the CSS into a seperate file
    new ExtractTextPlugin({
      filename: 'css/main.css?[hash]',
      allChunks: true,
    }),
    // Set the process.env to production so React includes the production
    // version of itself
    new DotEnv({
      path: path.resolve(__dirname, '..', '.env.prod'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
})
