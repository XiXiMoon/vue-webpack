//测试环境配置，全部接真实api数据
const utils = require("../../tool");
const testWebpackConfig = require("./webpack-conf.test");

const testConfig = utils.extend({}, testWebpackConfig);

module.exports = {
    "testConfig": testConfig
};