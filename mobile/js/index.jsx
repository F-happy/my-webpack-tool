/**
 * Created by fuhuixiang on 16-10-7.
 */
"use strict";
import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/style.scss';

import 'whatwg-fetch';

import Home from './views/home';

ReactDOM.render((<Home/>), document.getElementById('app'));
