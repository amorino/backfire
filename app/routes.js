export default function createRoutes() {
  return [{
    path: '/',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/HomePage').default
        })
      , 'Home');
    },
  }, {
    path: '/about',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/AboutPage').default
        })
      , 'About');
    },
  }, {
    path: '/catalog',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/CatalogPage').default
        })
      , 'Catalog');
    },
  }, {
    path: '/catalog/:id',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/CatalogItemPage').default
        })
      , 'CatalogItem');
    },
  }, {
    path: '*',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/NotFoundPage').default
        })
      , 'NotFound');
    },
  }];
}
