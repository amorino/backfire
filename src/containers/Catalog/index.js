import React, { Component } from 'react'
import List from './List'
import FilterLink from './Link'
import { RouterWrapper } from '../App/components'

class Catalog extends Component {
  render() {
    return (
      <RouterWrapper>
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
      </RouterWrapper>
    )
  }
}

export default Catalog
