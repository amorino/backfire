import express from 'express'
import React from 'react'
import sourceMapSupport from 'source-map-support'
import { matchPath } from 'react-router'
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
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null)
  if (!match) {
    res.status(404).send(render(
      <Provider store={store}>
        <NotFound />
      </Provider>))
    return
  }
  res.status(200).send(render(
    <Provider store={store}>
      <Home />
    </Provider>))
})

app.listen(3000, () => console.warn(`Listening at http://localhost:${3000}`))

