import React, {Component, PropTypes} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as ItemActions from '../actions/items';
import { bindActionCreators } from 'redux';
import ImageLoader  from 'react-imageloader';

@connect(state => ({
  data: state.items
}), dispatch => ({
  actions: bindActionCreators(ItemActions, dispatch)
}))
export default class Item extends Component {
    static propTypes = {
       children: PropTypes.any,
       actions: PropTypes.object
   }

   initialState = {
        id: null,
        description: 'Item not found',
        image: null
    }

    constructor(props, context) {
        super(props, context);
    }

  render () {
    const { data, actions, params } = this.props;
    const item = actions.fetchItems();
    console.log(item);
    // const item = data.items.filter(c => c.id == params.id)[0];
    this.state = item ? item : this.initialState;

    function preloader() {
        return <p> Loading </p>;
    }

    return (
      <div>
        <div className="header">
          <h1>{this.state.id}</h1>
        </div>
        <div className="content">
          <p>{this.state.description}</p>
          <ImageLoader src={this.state.image} preloader={preloader}>Image load failed!</ImageLoader>
        </div>
      </div>
    )
  }
}
