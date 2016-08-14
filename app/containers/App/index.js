import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from 'components/Menu';
import ReactTransitionGroup from 'react-transition-group-plus';
import styles from 'styles/containers/App';
import AnimateRoutes from 'components/utils/AnimateRoutes';
import { resize } from 'actions/app';

class App extends Component {
  state = {
    direction: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.props.dispatch(resize(window.innerWidth, window.innerHeight));
  }

  render() {
    const { location, children } = this.props;
    const direction = { in: '100%', out: '100%' };
    return (
      <div id="app">
        <Menu />
        <ReactTransitionGroup
          component="div"
          transitionMode={'simultaneous'}
          deferLeavingComponentRemoval={false}
          className={styles.router}
        >
          <AnimateRoutes
            style={styles.wrapper}
            direction={direction}
            children={children}
            key={location.pathname}
          />
        </ReactTransitionGroup>
      </div>
      );
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
