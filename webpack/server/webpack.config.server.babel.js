import path from 'path'
import webpack from 'webpack'
import externals from 'webpack-node-externals'

// PostCSS plugins
import postcssFocus from 'postcss-focus'
import rucksack from 'rucksack-css'
import lost from 'lost'

import base from '../webpack.config.base.babel'

module.exports = base({
  type: 'production',
  devtool: 'cheap-module-source-map',
  target: 'node',
  externals: externals(), // in order to ignore all modules in node_modules folder
  output: {
    path: path.resolve(__dirname, '../..', 'bundle'),
    filename: 'server.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/', // Insert the production server folder
    libraryTarget: 'commonjs2',
  },
  entry: [
    path.join(__dirname, '.', '/prod-server.js'),
  ],
  cssLoaders: [{
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: true,
    },
  }],
  // Load Stylus with SourceMaps
  stylusLoaders: [{
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: true,
      localIdentName: '[local]___[hash:base64:10]',
    },
  }, {
    loader: 'stylus-loader',
  }],
  // In production, we minify our CSS with cssnano
  stylusPlugins: [
    lost(),
    postcssFocus(), // Add a :focus to every :hover
    rucksack({
      autoprefixer: true,
      fallbacks: true,
    }),
  ],
  plugins: [
    // Minify and optimize the JavaScript
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     drop_console: true,
    //   },
    // }),
    // Set the process.env to production so React includes the production
    // version of itself
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
})
