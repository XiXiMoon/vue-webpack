//生产环境(线上环境)配置

const utils = require("../../tool");
const prodWebpackConfig = require("./webpack-conf.prod");

const prodConfig = utils.extend({}, prodWebpackConfig);

module.exports = {
    "prodConfig": prodConfig
};