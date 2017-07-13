/**
 * Created by fuhuixiang on 16/9/7.
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import TestView from './views/home';

import '../scss/style.scss';
// import '../scss/test.css';

import 'whatwg-fetch';

ReactDOM.render((<TestView/>), document.getElementById('app'));
