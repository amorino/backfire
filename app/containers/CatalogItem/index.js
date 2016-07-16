import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import styles from './styles';
import { getItem } from 'reducers/catalog';

class CatalogItem extends Component {
  PropTypes
  render() {
    const { id } = this.props;
    return (
      <div className={styles.container}>
        <h1>Detail</h1>
        <Item id={id} />
      </div>
    );
  }
}

CatalogItem.propTypes = {
  id: PropTypes.string
};

function mapStateToProps(state, props) {
  return {
    id: props.params.id,
    item: getItem(state.catalog, props.id)
  };
}

export default connect(mapStateToProps)(CatalogItem);
