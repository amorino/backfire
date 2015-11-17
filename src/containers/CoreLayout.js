import React, { PropTypes, Component } from 'react'
import Menu from '../components/menu/Menu'
import Footer from '../components/sections/Footer'
import { connect } from 'react-redux'
import RouteCSSTransitionGroup from '../components/utils/RouteCSSTransitionGroup'
import GSAPTransitionGroup from '../components/utils/GSAPTransitionGroup'


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

        <GSAPTransitionGroup component="div" transitionName="moveUp"
          transitionEnterTimeout={500} transitionLeaveTimeout={500}>
          {this.props.children}
        </GSAPTransitionGroup>

        <Footer />
      </div>
    )
  }
}

App.propTypes = {
    children: PropTypes.node
};


export default connect()(App);
