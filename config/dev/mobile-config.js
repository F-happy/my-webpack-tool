/**
 * Created by fuhuixiang on 2016-11-11.
 */
"use strict";
const pxToRem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const baseWebPackConfig = require('./base-config');

let newConfig = baseWebPackConfig('mobile');

newConfig.module.rules.forEach((v) => {
    if (v.test === '/\.scss$/') {
        v.use = ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [autoprefixer, pxToRem({
                            rootValue: 100,
                            propWhiteList: []
                        })]
                    }
                },
                'sass-loader']
        });
    }
});

module.exports = newConfig;
