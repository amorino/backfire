import React, { Component } from 'react';
import CatalogList from 'containers/Catalog/CatalogList';
import FilterLink from 'containers/Catalog/Link';
import styles from 'styles/containers/Catalog';
import Footer from 'components/Footer';

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
        <CatalogList />
        <Footer />
      </div>
    );
  }
}
