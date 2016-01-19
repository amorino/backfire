import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {getVisibleProducts} from '../../reducers/products'
import ProductItem from './ProductItem'
import ProductsList from './ProductsList'

class ProductsContainer extends Component {
    render() {
        const {products} = this.props
        if (products.length == 0) {return <h1>
            <i>Loading ...</i>
        </h1>;}
        return (
            <ProductsList title="Items">
                {products.map(product => <ProductItem key={product.id} product={product}/>)}
            </ProductsList>
        )
    }
}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, inventory: PropTypes.number.isRequired})).isRequired
}

function mapStateToProps(state) {
    return {products: getVisibleProducts(state.products)}
}

export default connect(mapStateToProps)(ProductsContainer)