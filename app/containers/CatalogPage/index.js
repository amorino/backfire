import React, {Component} from 'react';
import ProductList from './ProductList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <ProductList/>
      </div>
    );
  }
}
