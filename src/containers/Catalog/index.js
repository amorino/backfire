// @flow
import * as React from 'react'
import { H1 } from '../../components/Typography'
import List from './components/List'
import FilterLink from './components/Link'
import { RouterWrapper } from '../App/styled'

class Catalog extends React.PureComponent<void> {
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
