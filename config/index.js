const utils = require("../tool");
const devConfig = require("./config-dev");
const testConfig = require("./config-test");
const preConfig = require("./config-pre");
const prodConfig = require("./config-prod");

const envConfig = utils.extend({}, devConfig, testConfig, preConfig, prodConfig);

module.exports = envConfig;