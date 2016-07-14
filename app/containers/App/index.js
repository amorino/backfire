import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from 'components/menu';
import ReactTransitionGroupPlus from 'react-transition-group-plus';
import styles from './styles';

class App extends Component {
  render() {
    const { location, children } = this.props;
    return (
      <div id="app">
        <Menu />
        <ReactTransitionGroupPlus
          component="div"
          transitionMode={'simultaneous'}
          deferLeavingComponentRemoval={false}
          className={styles.route}
        >
        {React.cloneElement(children, {
          key: location.pathname
        })}
        </ReactTransitionGroupPlus>
      </div>
      );
  }
}

App.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any
};

export default connect()(App);
