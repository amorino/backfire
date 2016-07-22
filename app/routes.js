export default function routes() {
  return [{
    path: '/',
    index: 0,
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/Home').default,
        })
      , 'Home');
    },
  }, {
    path: '/about',
    index: 1,
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/About').default,
        })
      , 'About');
    },
  }, {
    path: '/catalog',
    index: 3,
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/Catalog').default,
        })
      , 'Catalog');
    },
  }, {
    path: '/catalog/:id',
    index: 3,
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/CatalogItem').default,
        })
      , 'CatalogItem');
    },
  }, {
    path: '*',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/NotFound').default,
        })
      , 'NotFound');
    },
  }];
}
