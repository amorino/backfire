import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Catalog from '../components/catalog/Catalog';
import * as CatalogActions from '../actions/catalog';

import _ from 'lodash';

function renderPage(items, actions) {
  return (
    <div>
      <Catalog items={items} actions={actions}/>
    </div>
  );
}

class CatalogLayout extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(CatalogActions.fetchCatalog());
  }

  render() {
    const {dispatch, items, isFetching, filter} = this.props;
    const actions = bindActionCreators(Object.assign({}, CatalogActions), dispatch);
    const filterRegEx = new RegExp(filter, 'i');

    const visibleItems = items && _.isArray(items)
      ? items.filter(item => {
        return item.title.match(filterRegEx);
      })
      : [];

    return (
      <div>
        {isFetching && <h2>Loading Catalog...</h2>}
        {!isFetching && renderPage(visibleItems, actions)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {items: state.content, isFetching: state.catalog.isFetching, filter: state.filter};
}

export default connect(mapStateToProps)(CatalogLayout);
