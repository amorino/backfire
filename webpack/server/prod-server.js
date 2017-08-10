import express from 'express'
import React from 'react'
import sourceMapSupport from 'source-map-support'
import { matchPath } from 'react-router-dom'

import Home from 'views/Home'
import NotFound from 'views/NotFound'
import configureStore from 'server-store'
import { Provider } from 'react-redux'
import render from './render'

const store = configureStore()

sourceMapSupport.install()

const routes = [
  '/',
]

const app = express()
app.use('/', express.static('./bundle'))

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(
        render(
          <Provider store={store}>
            <NotFound />
          </Provider>,
        ),
      )
    } else if (renderProps) {
      res.send(
        render(
          <Provider store={store}>
            <Home />
          </Provider>,
        ),
      )
    } else {
      res.status(500).send(
        render(
          <Provider store={store}>
            <NotFound />
          </Provider>,
        ),
      )
    }
  })
})

app.listen(3000, () => console.warn(`Listening at http://localhost:${3000}`))

