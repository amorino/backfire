import chalk from 'chalk'

import path from 'path'
import express from 'express'
import webpack from 'webpack'

import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import historyApi from 'connect-history-api-fallback'

import config from './webpack.config.development.babel'
import { log } from './util/log'

const app = express()
const compiler = webpack(config)
const PORT = 3000
const IP_ADRESS = 'localhost'

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

app.use('/', express.static(path.resolve(__dirname, '..', 'static')))

app.listen(PORT, () => log(`Server started at ${chalk.green(`http://${IP_ADRESS}:${PORT}`)}`))
