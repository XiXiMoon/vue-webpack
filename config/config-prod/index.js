//生产环境(线上环境)配置

import {utils} from '../../src/utils/tools'
import prodEnvConfig from './env-conf.prod'
import prodWebpackConfig from './webpack-conf.prod'


const prodConfig = {
    "prodConfig": utils.extend({}, prodEnvConfig, prodWebpackConfig)
}

export default prodConfig