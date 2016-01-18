import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import ItemDetail from '../components/catalog/ItemDetail';

import * as CatalogActions from '../actions/catalog';

class ItemDetailPage extends Component {
    componentDidMount() {
        const {dispatch} = this.props;
        const {id} = this.props.params;
        dispatch(CatalogActions.fetchItem(id));
    }

    render () {
        const {
            dispatch,
            item
        } = this.props;

        return (
            <div>
                {!item && <h1>Loading Item...</h1>}
                {item && <ItemDetail item={item}/>}
                <Link to={'/items'}>Back to Catalog</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {item: state.detail};
}

export default connect(mapStateToProps)(ItemDetailPage);
