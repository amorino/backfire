export default function createRoutes() {
  return [{
    path: '/',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/Home').default
        })
      , 'Home');
    }
  }, {
    path: '/about',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/About').default
        })
      , 'About');
    }
  }, {
    path: '/catalog',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/Catalog').default
        })
      , 'Catalog');
    }
  }, {
    path: '/catalog/:id',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/CatalogItem').default
        })
      , 'CatalogItem');
    }
  }, {
    path: '*',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('containers/NotFound').default
        })
      , 'NotFound');
    }
  }];
}
