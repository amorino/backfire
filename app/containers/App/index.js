import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Menu from 'components/Menu';
import styles from 'styles/containers/App';
import { resize } from 'actions/app';
import { RouteTransition } from 'react-router-transition';

class App extends Component {
  state = {
    direction: null,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(nextProps) {
    const { location } = this.props;
    this.setState({
      direction: this.getIndex(location.pathname.split('/')[1]) < this.getIndex(nextProps.location.pathname.split('/')[1]),
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getIndex = (pathname) => {
    let index;
    switch (pathname) {
      case 'catalog':
        index = 2;
        break;
      case 'about':
        index = 1;
        break;
      default:
        index = 0;
    }
    return index;
  }

  handleResize = () => {
    const { dispatch } = this.props;
    dispatch(resize(window.innerHeight, window.innerWidth));
  }

  render() {
    const { location, children } = this.props;
    const direction = this.state.direction ? { enter: 100, leave: -100 } : { enter: -100, leave: 100 };
    return (
      <div id="app">
        <Menu />
        <RouteTransition
          runOnMount={false}
          component={false}
          pathname={location.pathname}
          atEnter={{ opacity: 1, translate: direction.enter }}
          atLeave={{ opacity: 1, translate: direction.leave }}
          atActive={{ opacity: 1, translate: 0 }}
          mapStyles={style => ({
            opacity: `${style.opacity}`,
            WebkitTransform: `translate3d(${style.translate}%, 0, 0)`,
            MsTranform: `translate3d(${style.translate}%, 0, 0)`,
            transform: `translate3d(${style.translate}%, 0, 0)`,
            position: 'absolute',
            width: '100%',
            zIndex: this.state.current,
          })}
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
  location: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { index: state.app.index };
}

export default connect(mapStateToProps)(App);
