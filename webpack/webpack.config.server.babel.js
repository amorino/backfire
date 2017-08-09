import path from 'path'
// import webpack from 'webpack'
// import HtmlWebpackPlugin from 'html-webpack-plugin'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'
import externals from 'webpack-node-externals'

// PostCSS plugins
import postcssFocus from 'postcss-focus'
import rucksack from 'rucksack-css'
import lost from 'lost'
import base from './webpack.config.base.babel'

module.exports = base({
  type: 'production',
  devtool: 'cheap-module-source-map',
  target: 'node',
  externals: [externals()], // in order to ignore all modules in node_modules folder
  output: {
    path: path.resolve(__dirname, '..', 'server'),
    filename: 'server.js',
    // chunkFilename: '[name].chunk.js',
    publicPath: '/', // Insert the production server folder
    libraryTarget: 'commonjs2',
  },
  // In production, we skip all hot-reloading stuff
  entry: [
    path.join(__dirname, '..', 'server/index.js'),
  ],
  // We use ExtractTextPlugin so we get a seperate CSS file instead
  // of the CSS being in the JS and injected as a style tag
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
    // Extract the CSS into a seperate file
    // new ExtractTextPlugin({
    //   filename: 'css/main.css',
    //   allChunks: true,
    // }),
    // Set the process.env to production so React includes the production
    // version of itself
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify('production'),
    //   },
    // }),
  ],
})
