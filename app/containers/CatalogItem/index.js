import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import styles from './styles';

class CatalogItem extends Component {
  PropTypes
  render() {
    const { id, fetching } = this.props;
    return (
      <div className={styles.container}>
        <h1>Detail</h1>
        <Item id={id} fetching={fetching} />
      </div>
    );
  }
}

CatalogItem.propTypes = {
  id: PropTypes.string,
  fetching: PropTypes.any
};

function mapStateToProps(state, props) {
  return {
    id: props.params.id,
    filter: props.location.query.filter,
    fetching: state.catalog.allIds.isFetching
  };
}

export default connect(mapStateToProps)(CatalogItem);
