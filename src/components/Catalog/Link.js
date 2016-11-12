import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { filterItem } from 'actions/catalog'

const FilterLink = ({ filterFunc, filter, active, children }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        filterFunc(filter)
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
  filterFunc: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { filterFunc: filterItem })(FilterLink)
