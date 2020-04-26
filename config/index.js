// const utils = require("../tool");
// const devConfig = require("./config-dev");
// const testConfig = require("./config-test");
// const preConfig = require("./config-pre");
// const prodConfig = require("./config-prod");

import utils from '../tool'
import devConfig from './config-dev'
import testConfig from './config-test'

const envConfig = utils.extend({}, devConfig, testConfig);

export default envConfig;