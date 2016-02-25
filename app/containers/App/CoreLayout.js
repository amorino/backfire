import React, {PropTypes, Component} from 'react';
import Menu from '../components/menu/Menu';
import {connect} from 'react-redux';
// import GSAPTransitionGroup from '../components/utils/GSAPTransitionGroup';
import RouteTransition from '../components/utils/RouteTransition';

class App extends Component {

  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const {pathname} = this.props.location;
    const key = pathname.split('/') || 'root';
    const element = this.props.children || <div />;
    const elementToAnimate = React.cloneElement(element, {key});
    return (
      <div id="layout">
        <Menu />
        <RouteTransition pathname={pathname}>
          {elementToAnimate}
        </RouteTransition>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node
};

export default connect()(App);
