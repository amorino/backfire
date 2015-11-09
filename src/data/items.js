import items from './catalog.json'

const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {
      setTimeout(() => cb(items), timeout || TIMEOUT)
    },

    getProduct(id, cb, timeout) {
      setTimeout(() => {
        for (let item of items) {
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
