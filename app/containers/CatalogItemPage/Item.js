import React, {Component} from 'react';
import {Link} from 'react-router';

import {connect} from 'react-redux';
import {getItem} from '../../reducers/catalog';

export default class Item extends Component {
  render() {
    const {fetching, item} = this.props;
    return (
      <div>
        {fetching && <h3>Loading...</h3>}
        {!fetching &&
          <div>
            <h2>Item</h2>
            {item.title} - {item.description} - <Link to={'/catalog'}>Return</Link>
          </div>
        }
      </div>
    );
  }
}

export default connect((state, props) => ({
  item: getItem(state.catalog, props.id)
}))(Item);
