import React, {Component} from 'react';
import {connect} from 'react-redux';
import Item from './Item';
import styles from './styles';

class CatalogItemPage extends Component {
  render() {
    const {id, fetching} = this.props;
    return (
      <div className={styles.catalog_page}>
        <div className={styles.wrapper}>
          <h1>Detail</h1>
          <Item id={id} fetching={fetching} />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    id: props.params.id,
    filter: props.location.query.filter,
    fetching: state.catalog.visibleIds.isFetching
  };
}

export default connect(mapStateToProps)(CatalogItemPage);
