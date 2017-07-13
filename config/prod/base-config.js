/**
 * Created by fuhuixiang on 2016-11-11.
 */
"use strict";
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseWebPackConfig = require('../base-webpack-config');

module.exports = (platform) => {
    let baseConfig = baseWebPackConfig;

    baseConfig.entry.main = [path.resolve(__dirname, `../../${platform}/js/index.jsx`)];

    baseConfig.entry.vendor = ['react', 'react-dom', 'react-router', 'whatwg-fetch', 'moment', 'rc-form'];

    baseConfig.output.path = path.resolve(__dirname, `../../build/${platform}/static/`);

    baseConfig.output.filename = 'js/[name].[chunkHash:8].js';

    baseConfig.output.chunkFilename = '[name].[chunkHash:8].js';

    baseConfig.plugins.push(new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: JSON.stringify("production")
        }
    }));

    baseConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: (module, count) => {
            return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.join(__dirname, '../node_modules')
                ) === 0
            )
        }
    }));

    baseConfig.plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest',
        chunks: ['vendor']
    }));

    baseConfig.plugins.push(new HtmlWebpackPlugin({
        // alwaysWriteToDisk: true,
        template: path.resolve(__dirname, `../../${platform}/build.html`),
        filename: path.resolve(__dirname, `../../build/${platform}/index.html`),
        chunksSortMode: 'dependency',
        inject: true
    }));

    baseConfig.plugins.push(
        new ExtractTextPlugin('css/style.[hash].css')
    );

    baseConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {comments: false},
        compress: {
            //supresses warnings, usually from module minification
            warnings: false
        },
        minimize: true
    }));

    return baseConfig;
};
