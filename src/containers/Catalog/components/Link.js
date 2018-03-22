import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FilterButton } from '../styled'
import { filterItem } from '../actions'


const FilterLink = ({ filterItemFunc, filter, active, children }) => (
  <FilterButton active={active} onClick={(e) => { !active ? filterItemFunc(filter) : e.preventDefault() }}>{children}</FilterButton>
)


const mapStateToProps = (state, props) => ({
  active: props.filter === state.filter,
})


FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  filterItemFunc: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { filterItemFunc: filterItem })(FilterLink)
