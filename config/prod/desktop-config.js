/**
 * Created by fuhuixiang on 2016-11-11.
 */
"use strict";
const baseWebPackConfig = require('./base-config');

let newConfig = baseWebPackConfig('desktop');

newConfig.entry.vendor.push('antd');

newConfig.output.publicPath = '//xywebimg.b0.upaiyun.com/ppc/static/';

module.exports = newConfig;
