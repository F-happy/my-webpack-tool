/**
 * Created by fuhuixiang on 2016-11-11.
 */
"use strict";
const pxToRem = require('postcss-pxtorem');
const baseWebPackConfig = require('./base-config');

let newConfig = baseWebPackConfig('mobile');

// newConfig.entry.vendor.push('antd-mobile');

newConfig.output.publicPath = '//xywebimg.b0.upaiyun.com/mppc';

newConfig.postcss.push(pxToRem({
    rootValue: 100,
    propWhiteList: []
}));

module.exports = newConfig;
