import { connect } from 'react-redux';
import Link from './Link';
import { filterItem } from 'actions/catalog';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filterItem(ownProps.filter));
  }
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink;
