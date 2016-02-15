import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Product extends Component {
  render() {
    const {price, title, id} = this.props;
    return (
      <div>
        {title} - &#36;{price}<br/>
        <Link to={`catalog/${id}`}>{id}</Link>
      </div>
    );
  }
}

Product.propTypes = {
  price: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string
};
