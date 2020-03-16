import React from 'react'

import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Main from './pages/main';
import AdicionaContato from './pages/AdicionaContato';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/adicionaContato" component={ AdicionaContato } />
        </Switch>
    </BrowserRouter>
)

export default Routes;