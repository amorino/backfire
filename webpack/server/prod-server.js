import express from 'express'
import React from 'react'
import sourceMapSupport from 'source-map-support'
import { StaticRouter, Switch, Route } from 'react-router'
import configureStore from 'server-store'
import { Provider } from 'react-redux'
import chalk from 'chalk'

import Home from 'views/Home'
import About from 'views/About'
import Catalog from 'views/Catalog'
import CatalogItem from 'views/CatalogItem'
import NotFound from 'views/NotFound'
import Menu from 'components/App/Menu'
import ScrollToTop from 'components/Utils/ScrollToTop'

import render from './render'

const PORT = 3000
const IP_ADRESS = 'localhost'
const divider = chalk.gray('\n-----------------------------------')

sourceMapSupport.install()

const app = express()
app.use('/', express.static('./bundle'))

async function serverRender(req, res) {
  const location = req.url
  const context = {}
  try {
    const store = configureStore()

    const InitialView = (
      <Provider store={store}>
        <StaticRouter location={location} context={context} >
          <ScrollToTop>
            <div id="app">
              <Menu />
              <div className="app_router">
                <div className="app__wrapper">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/catalog/:id" component={CatalogItem} />
                    <Route path="/catalog" component={Catalog} />
                    <Route component={NotFound} />
                  </Switch>
                </div>
              </div>
            </div>
          </ScrollToTop>
        </StaticRouter>
      </Provider>
    )

    let html = ''
    try {
      html = render(InitialView)
    } catch (error) {
      console.error('Error: renderToString failed: ', error)
    }

    if (context.url) {
      return res.status.end({ location: context.url })
    }

    return res
      .status(200)
      .set('content-type', 'text/html')
      .send(html)
  } catch (error) {
    return res.status(500).end('Internal Server Error: ', error)
  }
}

app.get('/*', serverRender)

app.listen(PORT, () => console.log(`
  ${chalk.bold('Access URLs:')}${divider}
  Localhost: ${chalk.magenta(`http://${IP_ADRESS}:${PORT}`)}${divider}
  ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}
`))
