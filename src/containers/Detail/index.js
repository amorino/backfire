import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Card from './Card'
import { RouterWrapper } from '../App/components'

class Detail extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    const { id } = this.props
    return (
      <RouterWrapper>
        <Card id={id} />
      </RouterWrapper>
    )
  }
}

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
})

export default connect(mapStateToProps)(Detail)
