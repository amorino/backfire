export default function routes() {
  return [{
    path: '/',
    index: 0,
    getIndexRoute(location, cb) {
      require.ensure([], require => cb(null, { component: require('views/Home').default }), 'Home')
    },
  }, {
    path: '/about',
    index: 1,
    getIndexRoute(location, cb) {
      require.ensure([], require => cb(null, { component: require('views/About').default }), 'About')
    },
  }, {
    path: '/catalog',
    index: 3,
    getIndexRoute(location, cb) {
      require.ensure([], require => cb(null, { component: require('views/Catalog').default }), 'Catalog')
    },
  }, {
    path: '/catalog/:id',
    index: 3,
    getIndexRoute(location, cb) {
      require.ensure([], require => cb(null, { component: require('views/CatalogItem').default }), 'CatalogItem')
    },
  }, {
    path: '*',
    getIndexRoute(location, cb) {
      require.ensure([], require => cb(null, { component: require('views/NotFound').default }), 'NotFound')
    },
  }]
}
