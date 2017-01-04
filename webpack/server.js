const config = require('./webpack.dev.babel')
const express = require('express')
const webpack = require('webpack')

const app = express()
const compiler = webpack(config)

app.use(require('connect-history-api-fallback')({
  verbose: false,
}))

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.listen(7777, 'localhost', (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.warn(`Listening at http://localhost:${7777}`)
})
