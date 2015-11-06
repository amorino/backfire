import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, RECEIVE_ONE_PRODUCT} from '../constants/ActionTypes'

function products(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case RECEIVE_ONE_PRODUCT:
      return {
        ...state,
        ...action.product
      }
    default:
      const {
        productId
      } = action
      if (productId) {
        return {
          ...state, [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    case RECEIVE_ONE_PRODUCT:
      return action.product
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleProducts(state) {
  return state.visibleIds.map(id => getProduct(state, id))
}
