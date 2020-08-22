import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Filter from './pages/Filter';
import Create from './pages/Create';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/filter" component={Filter}/>
            <Route path="/create" component={Create}/>
        </BrowserRouter>
    )
}