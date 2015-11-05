import { Route, Redirect } from 'react-router';
import React from 'react';
import CoreLayout from '../containers/CoreLayout';
import Counter from '../components/Counter';
import About from '../components/About';
import Item from '../components/Item';
import NotFound from '../components/NotFound';
import UserPage from '../containers/UserPage';
import ItemsList from '../components/ItemsList';

export default (
  <Route component={CoreLayout}>
    <Route name='home' path='/' component={Counter} />
    <Route name='user' path="/users/:login" component={UserPage} />
    <Route name='about' path='/about' component={About} />
    <Route name='item' path='/item/:id' component={Item} />
    <Route name='items' path='/items' component={ItemsList} />
    <Route name='notfound' path='*' component={NotFound} />
  </Route>
);
