import {Route, Redirect} from 'react-router';
import React from 'react';
import CoreLayout from '../containers/CoreLayout';
import CatalogLayout from '../containers/CatalogLayout';
import ItemDetailLayout from '../containers/ItemDetailLayout';

import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';
import Home from '../components/pages/Home';

export default(
    <Route component={CoreLayout}>
        <Route name='home' path='/' component={Home}/>
        <Route name='about' path='/about' component={About}/>
        <Route name='catalog' path='/items' component={CatalogLayout}/>
        <Route name='detail' path='/catalog/:id' component={ItemDetailLayout}/>
        <Route name='notfound' path='*' component={NotFound}/>
    </Route>
);
