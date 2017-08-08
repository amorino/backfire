import express from 'express'
import webpack from 'webpack'

import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import historyApi from 'connect-history-api-fallback'

import config from './webpack.config.development.babel'

const app = express()
const compiler = webpack(config)
const port = 7777

app.use(historyApi({ verbose: false }))

app.use(devMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,
  },
}))

app.use(hotMiddleware(compiler))

app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.warn(`Listening at http://localhost:${port}`)
})
