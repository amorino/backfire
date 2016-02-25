import React, {Component} from 'react';
import CatalogList from './CatalogList';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <div className={styles.catalog}>
        <div className={styles.wrapper}>
          <h1>Catalog</h1>
          <CatalogList />
        </div>
      </div>
    );
  }
}
