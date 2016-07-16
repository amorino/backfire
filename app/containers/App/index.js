import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from 'components/menu';
// import ReactTransitionGroupPlus from 'react-transition-group-plus';
import ReactTransitionGroup from 'react-addons-transition-group';
import styles from './styles';
import AnimateChildren from './AnimateChildren';

class App extends Component {
  render() {
    const { location, children } = this.props;
    return (
      <div id="app">
        <Menu />
        <ReactTransitionGroup
          component="div"
          className={styles.routes}
        >
          <AnimateChildren style={styles.wrapper} children={children} key={location.pathname} />
        </ReactTransitionGroup>
      </div>
      );
  }
}

App.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any
};

export default connect()(App);
