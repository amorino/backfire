import app from 'styles/views/App'

import React, { Component } from 'react'
import CatalogList from 'components/Catalog/CatalogList'
import FilterLink from 'components/Catalog/Link'
import Footer from 'components/App/Footer'

export default class Catalog extends Component {
  render() {
    return (
      <div className={app.container}>
        <h2>Catalog</h2>
        <p>
          Show:
          {''}
          <FilterLink filter="all">
            All
          </FilterLink>
          {', '}
          <FilterLink filter="music">
            Music
          </FilterLink>
          {', '}
          <FilterLink filter="art">
            Art
          </FilterLink>
        </p>
        <CatalogList />
        <Footer />
      </div>
    )
  }
}
