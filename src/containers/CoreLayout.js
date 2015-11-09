import React, { PropTypes, Component } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/sections/Footer'
import { connect } from 'react-redux'

class App extends Component {

  static propTypes = {
    children: PropTypes.any,
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

App.propTypes = {
    children: PropTypes.node
};


export default connect()(App);
