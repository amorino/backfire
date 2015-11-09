import React, { PropTypes, Component } from 'react'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
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
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.node
};


export default connect()(App);
