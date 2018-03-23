// @flow
import * as React from 'react'
import { connect } from 'react-redux'
import { FilterButton } from '../styled'
import { filterItem } from '../actions'

type Props = {
  filterItemFunc: (filter: string) => void,
  filter: string,
  active: boolean,
  children: React.Node,
}

const FilterLink = ({ filterItemFunc, filter, active, children }: Props) => (
  <FilterButton active={active} onClick={(e) => { !active ? filterItemFunc(filter) : e.preventDefault() }}>{children}</FilterButton>
)


const mapStateToProps = (state, props) => ({
  active: props.filter === state.filter,
})

export default connect(mapStateToProps, { filterItemFunc: filterItem })(FilterLink)
