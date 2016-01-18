import {Route, Redirect} from 'react-router';
import React from 'react';
import CoreLayout from '../containers/CoreLayout';
import CatalogPage from '../containers/CatalogPage';
import ItemDetailPage from '../containers/ItemDetailPage';

import About from '../components/sections/About';
import NotFound from '../components/sections/NotFound';
import Home from '../components/sections/Home';

export default(
    <Route component={CoreLayout}>
        <Route name='home' path='/' component={Home}/>
        <Route name='about' path='/about' component={About}/>
        <Route name='catalog' path='/items' component={CatalogPage}/>
        <Route name='detail' path='/catalog/:id' component={ItemDetailPage}/>
        <Route name='notfound' path='*' component={NotFound}/>
    </Route>
);
