import catalog from 'assets/json/catalog.json'

export default {
  getItems() {
    return new Promise(resolve => resolve(catalog))
  },
}
