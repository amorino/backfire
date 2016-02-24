import React from 'react';
import {connect} from 'react-redux';
import Menu from 'components/menu';
import {RouteTransition} from 'react-router-transition';
import styles from './styles.styl';

class App extends React.Component {
  render() {
    // const {pathname} = this.props.location;
    // const key = pathname.split('/') || 'root';
    // const element = this.props.children || <div/>;
    // const elementToAnimate = React.cloneElement(element, {key});
    return (
      <div id="app">
        <Menu/>
        <RouteTransition pathname={this.props.location.pathname}
          atEnter={{opacity: 0}}
          atLeave={{opacity: 0}}
          atActive={{opacity: 1}}
          mapStyles={style => ({opacity: `${style.opacity}`, position: 'absolute', width: '100%'})}
        >
          <div className={styles.wrapper}>
            {this.props.children}
          </div>
        </RouteTransition>
      </div>
    );
  }
}

export default connect()(App);
