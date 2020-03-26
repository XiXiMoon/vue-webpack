//开发环境配置, 需单独一个命令开启全mock数据，一个命令开启全真实接口数据，一个命令开启当真实接口数据挂掉用mock数据替代的

const utils = require("../../tool");
const devWebpackConfig = require("./webpack-conf.dev");

const devConfig = utils.extend({}, devWebpackConfig);

module.exports = {
    "devConfig": devConfig
};