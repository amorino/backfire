const routes = [{
  path: '/',
  getIndexRoute(location, cb) {
    require.ensure([], require => cb(null, { component: require('views/Home').default }), 'Home')
  },
}, {
  path: '/about',
  getIndexRoute(location, cb) {
    require.ensure([], require => cb(null, { component: require('views/About').default }), 'About')
  },
}, {
  path: '/catalog',
  getIndexRoute(location, cb) {
    require.ensure([], require => cb(null, { component: require('views/Catalog').default }), 'Catalog')
  },
}, {
  path: '/catalog/:id',
  getIndexRoute(location, cb) {
    require.ensure([], require => cb(null, { component: require('views/CatalogItem').default }), 'CatalogItem')
  },
}, {
  path: '*',
  getIndexRoute(location, cb) {
    require.ensure([], require => cb(null, { component: require('views/NotFound').default }), 'NotFound')
  },
}]

export default routes
