import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from 'components/menu';
// import ReactTransitionGroupPlus from 'react-transition-group-plus';
import ReactTransitionGroup from 'react-addons-transition-group';
import styles from 'styles/containers/App';
import AnimateRoutes from 'components/utils/AnimateRoutes';
import { resize } from 'actions/app';

class App extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.props.dispatch(resize(window.innerHeight, window.innerWidth));
  }

  render() {
    const { location, children } = this.props;
    return (
      <div id="app">
        <Menu />
        <ReactTransitionGroup
          component="div"
          className={styles.routes}
        >
          <AnimateRoutes style={styles.wrapper} children={children} key={location.pathname} />
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
