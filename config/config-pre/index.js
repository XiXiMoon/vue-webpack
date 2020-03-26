//预发布环境配置
const utils = require("../../tool");
const preWebpackConfig = require("./webpack-conf.pre");

const preConfig = utils.extend({}, preWebpackConfig);

module.exports = {
    "preConfig": preConfig
};