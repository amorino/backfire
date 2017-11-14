import React, { Component } from 'react'
import { H1 } from 'components/Typography'
import List from './List'
import FilterLink from './Link'
import { RouterWrapper } from '../App/components'

class Catalog extends Component {
  render() {
    return (
      <RouterWrapper>
        <H1>Catalog</H1>
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
