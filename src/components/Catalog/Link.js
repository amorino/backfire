import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { filterItem } from 'actions/catalog'

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

const mapStateToProps = (state, props) => ({
  active: props.filter === state.filter,
})

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(filterItem(props.filter))
  },
})

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
