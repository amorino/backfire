import path from 'path'
import express from 'express'
import webpack from 'webpack'
import chalk from 'chalk'

import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import historyApi from 'connect-history-api-fallback'

import config from './webpack.config.development.babel'

const app = express()
const compiler = webpack(config)
const PORT = 3000
const IP_ADRESS = 'localhost'
const divider = chalk.gray('\n-----------------------------------')


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

app.listen(PORT, () => console.log(`
  ${chalk.bold('Access URLs:')}${divider}
  Localhost: ${chalk.magenta(`http://${IP_ADRESS}:${PORT}`)}${divider}
  ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
`))
