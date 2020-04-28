// const utils = require("../tool");
// const devConfig = require("./config-dev");
// const testConfig = require("./config-test");
// const preConfig = require("./config-pre");
// const prodConfig = require("./config-prod");

import utils from '../tool'
import devConfig from './config-dev'
import testConfig from './config-test'
import preConfig from './config-pre'
import prodConfig from './config-prod'

const envConfig = utils.extend({}, devConfig, testConfig, preConfig, prodConfig);

export default envConfig;