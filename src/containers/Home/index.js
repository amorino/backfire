import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Footer from '../../components/Footer'

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div className="AppContainer" ref={node => this.node = node}>
        <h2>Welcome to Backfire</h2>
        <p>This is a static page.</p>
        <Footer />
      </div>
    )
  }
}

export default connect()(Home)
