import React, { PropTypes } from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default class App extends React.Component {

  static propTypes = {
    children: PropTypes.any
  }

  constructor (props, context) {
    super(props, context);
  }

  render () {
    return (
      <div id="layout">
        <Menu />

        <div id="main">
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}
