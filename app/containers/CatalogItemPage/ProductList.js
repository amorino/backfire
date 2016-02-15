import React, {Component, PropTypes} from 'react';
import ProductItem from './ProductItem';

import {connect} from 'react-redux';
import {getItem} from '../../reducers/catalog';

export default class ProductList extends Component {
  render() {
    const {item} = this.props;
    return (
      <div>
        <h3>Product</h3>
        <ProductItem key={item.id} product={item}/>
      </div>
    );
  }
}

ProductList.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect((state, props) => ({
  item: getItem(state.get('catalog'), props.id)
}))(ProductList);
