/**
 * Created by fuhuixiang on 2016-11-11.
 */
"use strict";
const path = require('path');
const baseWebPackConfig = require('../base-webpack-config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (platform)=> {
    let baseConfig = baseWebPackConfig;

    baseConfig.entry.main = [path.resolve(__dirname, `../../${platform}/js/index.jsx`), 'webpack/hot/only-dev-server'];

    baseConfig.output.path = path.resolve(__dirname, `build/${platform}`);

    baseConfig.output.filename = '/static/js/main.js';

    baseConfig.devServer = {
        contentBase: path.resolve(__dirname, `../../${platform}`)
    };

    baseConfig.plugins.push(
        new ExtractTextPlugin('/static/css/style.css')
    );

    baseConfig.output.publicPath = '';

    return baseConfig;
};
