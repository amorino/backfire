import {connect} from 'react-redux';
import {toggleTodo} from 'actions';
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

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodo(id));
  }
});

const VisibleCatalogList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CatalogList);

export default VisibleCatalogList;
