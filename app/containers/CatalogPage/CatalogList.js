import React, {Component, PropTypes} from 'react';
import Item from './Item';

import {connect} from 'react-redux';
import {getVisibleItems} from '../../reducers/catalog';

export default class CatalogList extends Component {
  render() {
    const {items} = this.props;

    return (
      <div>
        <h3>Items</h3>
        {items.map(item => <Item key={item.id} item={item} />)}
      </div>
    );
  }
}

CatalogList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, image: PropTypes.string.isRequired})).isRequired
};

export default connect(state => ({
  items: getVisibleItems(state.get('catalog'))
}))(CatalogList);
