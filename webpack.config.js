/**
 * Created by fuhuixiang on 16-10-25.
 */
"use strict";

const serverType = 'dev'; // dev | prod
const platform = 'mobile'; // mobile | desktop

module.exports = require(`./config/${serverType}/${platform}-webpack-config`)();
