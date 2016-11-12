/**
 * Created by fuhuixiang on 2016-11-11.
 */
"use strict";
const baseWebPackConfig = require('./base-config');

module.exports = ()=> {
    let newConfig = baseWebPackConfig('desktop');

    newConfig.entry.vendor.push('antd-mobile');

    return newConfig;
};
