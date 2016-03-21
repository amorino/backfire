import React, {Component} from 'react';
import {Link} from 'react-router';

import {connect} from 'react-redux';
import {getItem} from '../../reducers/catalog';

export default class Item extends Component {
  render() {
    if (this.props.item) {
      const {description, title} = this.props.item;
      return (
        <div>
          <h2>Item</h2>
          {title} - {description} - <Link to={'/catalog'}>Return</Link>
        </div>
      );
    }
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
}

export default connect((state, props) => ({
  item: getItem(state.catalog, props.id)
}))(Item);
