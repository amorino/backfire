import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

export default class Item extends Component {
  render() {
    const {description, title, id} = this.props.item;
    return (
      <div>
        {title} - {description} - <Link to={`catalog/${id}`}>{id}</Link>
      </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.shape({title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, image: PropTypes.string.isRequired}).isRequired,
};
