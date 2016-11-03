import catalog from 'assets/json/catalog.json'

// const TIMEOUT = 2000

export default {
  getItems() {
    return new Promise(resolve => resolve(catalog))
  },
}
