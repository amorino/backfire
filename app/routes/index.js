export default function createRoutes() {
  return [
    {
      path: '/',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('HomePage').default);
        }, 'HomePage');
      }
    }, {
      path: '/about',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('AboutPage').default);
        }, 'AboutPage');
      }
    }, {
      path: '/catalog',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('CatalogPage').default);
        }, 'CatalogPage');
      }
    }, {
      path: '/catalog/:id',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('CatalogItemPage').default);
        }, 'CatalogItemPage');
      }
    }, {
      path: '*',
      getComponent: function get(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('NotFoundPage').default);
        }, 'NotFoundPage');
      }
    }
  ];
}
