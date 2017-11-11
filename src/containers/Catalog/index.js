import React, { Component } from 'react'
import List from './components/List'
import FilterLink from './components/Link'

class Catalog extends Component {
  render() {
    return (
      <div className="AppContainer">
        <h2>Catalog</h2>
        <p>
          Show:
          {' '}
          <FilterLink filter="all">All</FilterLink>
          {', '}
          <FilterLink filter="music">Music</FilterLink>
          {', '}
          <FilterLink filter="art">Art</FilterLink>
        </p>
        <List />
      </div>
    )
  }
}

export default Catalog
