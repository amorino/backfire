import shop from '../data/items'
import * as types from '../constants/ActionTypes'

function receiveProducts(products) {
  return {
    type: types.RECEIVE_PRODUCTS,
    products: products
  }
}

function receiveProduct(product) {
  return {
    type: types.RECEIVE_ONE_PRODUCT,
    product: product
  }
}

export function getAllProducts() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

export function getOneProduct(id) {
  return dispatch => {
    shop.getProduct(id, product => {
      dispatch(receiveProduct(product))
    })
  }
}
