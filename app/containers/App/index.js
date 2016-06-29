import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from 'components/menu';
import { RouteTransition } from 'react-router-transition';
import styles from './styles';

class App extends Component {
  render() {
    const { location, children } = this.props;
    return (
      <div id="app">
        <Menu />
        <RouteTransition
          pathname={location.pathname}
          atEnter={{ opacity: 0, translate: 100 }}
          atLeave={{ opacity: 0, translate: 100 }}
          atActive={{ opacity: 1, translate: 0 }}
          mapStyles={style => ({ opacity: `${style.opacity}`, transform: `translateY(${style.translate}px)`, position: 'absolute', width: '100%' })}
        >
          <div className={styles.wrapper}>
            {children}
          </div>
        </RouteTransition>
      </div>
      );
  }
}

App.propTypes = {
  location: PropTypes.object,
  children: PropTypes.any,
};

export default connect()(App);
