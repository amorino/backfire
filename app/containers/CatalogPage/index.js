import React, {Component} from 'react';
import VisibleCatalogList from './VisibleCatalogList';
import FilterLink from './FilterLink';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <div className={styles.catalog}>
        <div className={styles.wrapper}>
          <h1>Catalog</h1>
          <p>
              Show:
            {" "}
            <FilterLink filter="all">
                All
            </FilterLink>
            {", "}
            <FilterLink filter="music">
                Music
            </FilterLink>
            {", "}
            <FilterLink filter="art">
                Art
            </FilterLink>
          </p>
          <VisibleCatalogList />
        </div>
      </div>
    );
  }
}
