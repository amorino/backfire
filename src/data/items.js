import _products from './items.json'

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
      setTimeout(() => cb(_products), timeout || TIMEOUT)
    },

    getProduct(id, cb, timeout) {
        setTimeout(() => {
          for (let item of _products) {
            if (item.id == id) {
                cb(item)
            }
          }
        }, timeout || TIMEOUT);
    },

    buyProducts(payload, cb, timeout) {
      setTimeout(() => cb(), timeout || TIMEOUT)
    }
}
