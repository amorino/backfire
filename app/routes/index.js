export default function createRoutes() {
  return [{
    path: '/',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('HomePage').default
        })
      );
    },
  }, {
    path: '/about',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('AboutPage').default
        })
      );
    },
  }, {
    path: '/catalog',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('CatalogPage').default
        })
      );
    },
  }, {
    path: '/catalog/:id',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('CatalogItemPage').default
        })
      );
    },
  }, {
    path: '*',
    getIndexRoute(location, cb) {
      require.ensure([], require =>
        cb(null, {
          component: require('NotFoundPage').default
        })
      );
    },
  }];
}
