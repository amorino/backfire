import React, {Component} from 'react';
import CatalogList from './CatalogList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping Cart Example</h2>
        <hr/>
        <CatalogList/>
      </div>
    );
  }
}
