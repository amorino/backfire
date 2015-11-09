import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import * as ProductActions from '../../actions/products';
import { getVisibleProducts, getProduct } from '../../reducers/products'
import { bindActionCreators } from 'redux';
import ImageLoader  from 'react-imageloader';
import { getAllProducts, getOneProduct } from '../../actions/products'

function loadData(props) {
  props.dispatch(getOneProduct(props.params.id))
}

@connect(state => ({
  data: getProduct(state.products, state.router.params.id)
  // data: state.products.visibleIds
}), dispatch => ({
  // dispatch: dispatch,
  actions: bindActionCreators(ProductActions, dispatch)
}))
export default class Item extends Component {
    static propTypes = {
       children: PropTypes.any,
       actions: PropTypes.object
   }

   initialState = {
        id: null,
        description: 'Loading',
        image: null
    }

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
      // loadData(this.props);
    }

  render () {
    const { data, params, actions } = this.props;
    const item = data;
    // const item = data.filter(c => c.id == params.id)[0];
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
