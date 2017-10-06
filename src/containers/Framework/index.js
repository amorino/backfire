import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import { Route } from 'react-router-dom'

import App from '../App'
import ScrollTop from './components/ScrollTop'

export default class Framework extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  render() {
    const { history } = this.props
    return (
      <ConnectedRouter history={history}>
        <ScrollTop>
          <Route component={App} />
        </ScrollTop>
      </ConnectedRouter>
    )
  }
}
