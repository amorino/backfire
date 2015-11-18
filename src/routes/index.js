import {Route, Redirect} from 'react-router';
import React from 'react';
import CoreLayout from '../containers/CoreLayout';
import UserPage from '../containers/UserPage';
import CatalogPage from '../containers/CatalogPage';
import ItemDetailPage from '../containers/ItemDetailPage';

import Counter from '../components/counter/Counter';
import About from '../components/sections/About';
import NotFound from '../components/sections/NotFound';
import Item from '../components/product/Item';

export default(
    <Route component={CoreLayout}>
        <Route name='home' path='/' component={Counter}/>
        <Route name='user' path="/users/:login" component={UserPage}/>
        <Route name='about' path='/about' component={About}/>
        <Route name='item' path='/item/:id' component={Item}/>
        <Route name='catalog' path='/items' component={CatalogPage}/>
        <Route name='detail' path='/catalog/:id' component={ItemDetailPage}/>
        <Route name='notfound' path='*' component={NotFound}/>
    </Route>
);
