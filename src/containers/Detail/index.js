import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Footer from '../../components/Footer'
import Card from './components/Card'

class Detail extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  }

  render() {
    const { id } = this.props
    return (
      <div className="AppContainer">
        <h2>Detail</h2>
        <Card id={id} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  id: props.match.params.id,
})

export default connect(mapStateToProps)(Detail)
