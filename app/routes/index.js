import {Route, Redirect} from 'react-router';
import React from 'react';
import CoreLayout from '../containers/CoreLayout';
export default(
    <Route component={CoreLayout}>
      <Route
        path="/"
        getComponent={function get(location, cb) {
          require.ensure([], (require) => {
            cb(null, require('../components/pages/Home').default);
          }, 'HomePage');
        }}
        />
        <Route
        path="/about"
        getComponent={function get(location, cb) {
          require.ensure([], (require) => {
            cb(null, require('../components/pages/About').default);
          }, 'About');
        }}
        />
        <Route
        path="/items"
        getComponent={function get(location, cb) {
          require.ensure([], (require) => {
            cb(null, require('../containers/CatalogLayout').default);
          }, 'CatalogLayout');
        }}
        />
        <Route
        path="/catalog/:id"
        getComponent={function get(location, cb) {
          require.ensure([], (require) => {
            cb(null, require('../containers/ItemDetailLayout').default);
          }, 'ItemDetailLayout');
        }}
        />
        <Route
        path="*"
        getComponent={function get(location, cb) {
          require.ensure([], (require) => {
            cb(null, require('../components/pages/NotFound').default);
          }, 'NotFound');
        }}
        />
    </Route>
);
