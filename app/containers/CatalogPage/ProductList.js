import React, {Component, PropTypes} from 'react';
import ProductItem from './ProductItem';

import {connect} from 'react-redux';
import {getVisibleItems} from '../../reducers/catalog';

export default class ProductList extends Component {
  render() {
    const {items} = this.props;

    return (
      <div>
        <h3>Products</h3>
        {items.map(item => <ProductItem key={item.id} product={item}/>)}
      </div>
    );
  }
}

ProductList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, price: PropTypes.number.isRequired, inventory: PropTypes.number.isRequired})).isRequired
};

export default connect(state => ({
  items: getVisibleItems(state.get('catalog'))
}))(ProductList);
