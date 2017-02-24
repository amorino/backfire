const modules = [
  'src',
  'node_modules',
]

module.exports = {
  devtool: 'inline-source-map',
  // Some node_modules pull in Node-specific dependencies.
  // Since we're running in a browser we have to stub them out. See:
  // https://webpack.github.io/docs/configuration.html#node
  // https://github.com/webpack/node-libs-browser/tree/master/mock
  // https://github.com/webpack/jade-loader/issues/8#issuecomment-55568520
  node: {
    fs: 'empty',
    child_process: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  resolve: {
    modules,
    extensions: [
      '.js',
      '.styl',
    ],
  },
}
