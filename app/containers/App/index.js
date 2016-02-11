import React from 'react';
import {connect} from 'react-redux';
import Menu from 'components/menu';

class App extends React.Component {
  render() {
    // const {pathname} = this.props.location;
    // const key = pathname.split('/') || 'root';
    // const element = this.props.children || <div/>;
    // const elementToAnimate = React.cloneElement(element, {key});
    return (
      <div id="layout">
        <Menu/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect()(App);
