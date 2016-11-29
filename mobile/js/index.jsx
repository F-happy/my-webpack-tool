/**
 * Created by fuhuixiang on 16-10-7.
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

require('../scss/style.scss');

import 'whatwg-fetch';

import Home from './views/home';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home}/>
        </Route>
    </Router>
), document.getElementById('duobao'));
