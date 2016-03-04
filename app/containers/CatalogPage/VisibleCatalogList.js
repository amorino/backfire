import {connect} from 'react-redux';
import CatalogList from './CatalogList';
import {getVisibleItems} from '../../reducers/catalog';

const getVisibleTodos = (catalog, filter) => {
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
  catalog: getVisibleTodos(getVisibleItems(state.get('catalog')), state.get('filter'))
});

const VisibleCatalogList = connect(
  mapStateToProps
)(CatalogList);

export default VisibleCatalogList;
