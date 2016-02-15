import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductList from './ProductList';

class App extends Component {
  render() {
    const id = this.props.params.id;
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ProductList id={id}/>
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
