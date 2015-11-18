import React, {Component, PropTypes} from 'react'
import Product from './Product'

export default class ProductItem extends Component {
    render() {
        const {product} = this.props

        return (
            <div style={{
            marginBottom: 20
            }}>
                <Product title={product.title} description={product.description} image={product.image}/>
            </div>
        )
    }
}

ProductItem.propTypes = {
    product: PropTypes.shape({title: PropTypes.string.isRequired, description: PropTypes.string.isRequired, image: PropTypes.string.isRequired}).isRequired
}
