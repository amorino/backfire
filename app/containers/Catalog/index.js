import React, { Component } from 'react';
import VisibleCatalogList from 'containers/Catalog/VisibleCatalogList';
import FilterLink from 'containers/Catalog/FilterLink';
import styles from 'styles/containers/Catalog';
import Footer from 'components/footer';

export default class Catalog extends Component {
  render() {
    return (
      <div className={styles.container}>
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
        <Footer />
      </div>
    );
  }
}
