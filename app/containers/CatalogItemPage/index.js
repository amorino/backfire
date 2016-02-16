import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';

class App extends Component {
  render() {
    const id = this.props.params.id;
    return (
      <div>
        <h2>Detail</h2>
        <hr/>
        <Item id={id}/>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    id: props.params.id,
    filter: props.location.query.filter
  };
}

export default connect(mapStateToProps)(App);
