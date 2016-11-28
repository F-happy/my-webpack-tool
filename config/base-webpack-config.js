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
        loaders: [
            {
                // js过滤器, 将ES6风格的reacts代码编译成正常浏览器识别的ES5代码
                test: /\.(jsx|js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: [['import', [
                        {"libraryName": "antd", "style": "css"},
                        {"libraryName": "antd-mobile", "style": "css", "libraryDirectory": "lib"}
                    ]]]
                }
            }, {
                // SCSS过滤器会将SCSS样式导出为独立的css文件而不是react风格的行内样式
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!sass-loader')
            }, {
                test: /\.css$/,
                loader: 'style!css!postcss',
            }, {
                // 图片过滤器会将小于4k的文件直接以data数据的形式写在样式中, 而其他的文件才会正常引入
                test: /\.(jpg|png)$/,
                loader: 'url-loader?limit=4096&name=/static/images/[name].[ext]'
            }, {
                test: /\.woff$/,
                loader: 'file-loader?name=/static/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ],
    resolve: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
        extensions: ['', '.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx', '.js', '.jsx', '.json'],
    },
    resolveLoader: {
        modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
    },
    postcss: [autoprefixer]
};
