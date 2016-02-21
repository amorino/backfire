import React, {Component} from 'react';
import CatalogList from './CatalogList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Catalog</h2>
        <hr/>
        <CatalogList/>
      </div>
    );
  }
}
