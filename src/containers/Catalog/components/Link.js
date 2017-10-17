import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filterItem } from '../actions'

const FilterLink = ({ filterItemFunc, filter, active, children }) => {
  if (active) {
    return <span className="button">{children}</span>
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        filterItemFunc(filter)
      }}
    >
      {children}
    </button>
  )
}

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
