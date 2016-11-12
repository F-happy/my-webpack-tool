/**
 * Created by fuhuixiang on 16/9/7.
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

// import 'antd/dist/antd.css';
require('../scss/style.scss');

import 'whatwg-fetch';

import Home from './views/home';
import LoginView from './views/login';
import BuyBackCard from './views/buy_back_card';
import TaskCard from './views/take_card';
import MyCard from './views/my_card';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={LoginView}/>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={LoginView}/>
            <Route path="/buy_back_card" component={BuyBackCard}/>
            <Route path="/take_card" component={TaskCard}/>
            <Route path="/my_card" component={MyCard}/>
        </Route>
    </Router>
), document.getElementById('duobao'));
