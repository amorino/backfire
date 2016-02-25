import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import {connect} from 'react-redux';
import {getItem} from '../../reducers/catalog';

export default class Item extends Component {
  render() {
    const {description, title} = this.props.item;
    return (
      <div>
        <h2>Item</h2>
        {title} - {description} - <Link to={'/catalog'}>Return</Link>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect((state, props) => ({
  item: getItem(state.get('catalog'), props.id)
}))(Item);
