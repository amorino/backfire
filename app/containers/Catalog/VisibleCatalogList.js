import { connect } from 'react-redux';
import CatalogList from './CatalogList';
import { getItems } from 'reducers/catalog';

const getFilteredItems = (catalog, filter) => {
  switch (filter) {
    case 'all':
      return catalog;
    case 'art':
      return catalog.filter(t => t.type === 'art');
    case 'music':
      return catalog.filter(t => t.type === 'music');
    default:
      return catalog;
  }
};

const mapStateToProps = (state) => ({
  catalog: getFilteredItems(getItems(state.catalog), state.filter),
  fetching: state.catalog.allIds.isFetching
});

const VisibleCatalogList = connect(
  mapStateToProps
)(CatalogList);

export default VisibleCatalogList;
