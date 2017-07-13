/**
 * Created by fuhuixiang on 2016-11-11.
 */
"use strict";
const webpack           = require('webpack'),
      path              = require('path'),
      autoprefixer      = require('autoprefixer'),
      precss            = require('precss'),
      pxtorem           = require('postcss-pxtorem'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {},
    output: {
        publicPath: ''
    },
    module: {
        rules: [
            {
                // js过滤器, 将ES6风格的reacts代码编译成正常浏览器识别的ES5代码
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'react'],
                        plugins: [['import', [
                            {"libraryName": "antd", "style": "css"},
                            {"libraryName": "antd-mobile", "style": "css", "libraryDirectory": "lib"}
                        ]]]
                    }
                }]
            }, {
                // SCSS过滤器会将SCSS样式导出为独立的css文件而不是react风格的行内样式
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
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
                            options: {plugins: () => [autoprefixer]}
                        },
                        'sass-loader']
                })
            }, {
                test: /\.css$/,
                use: [{loader: 'css-loader'}]
            }, {
                // 图片过滤器会将小于4k的文件直接以data数据的形式写在样式中, 而其他的文件才会正常引入
                test: /\.(jpg|png)$/,
                use: [{loader: 'url-loader', options: {limit: 4096, name: '/static/images/[name].[ext]'}}]
            }, {
                test: /\.woff$/,
                use: [{loader: 'file-loader', options: {name: '/static/fonts/[name].[ext]'}}]
            }
        ]
    },
    plugins: [],
    resolve: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx'],
    },
    resolveLoader: {
        modules: ['node_modules', path.join(__dirname, '../node_modules')],
    }
};
