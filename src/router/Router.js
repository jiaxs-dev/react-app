import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/login/login'
import Page404 from '../pages/exception/page404'
import Index from '../pages/index/index'
import chart from "../pages/chart/chart";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/404" component={Page404}/>
            <Route exact path="/" component={Index}/>
            <Route exact path="/chart" component={chart}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;