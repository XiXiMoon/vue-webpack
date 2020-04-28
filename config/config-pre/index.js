//预发布环境配置
import utils from '../../tool'
import preEnvConfig from './env-conf.pre'
import preWebpackConfig from './webpack-conf.pre'


const preConfig = {
    "preConfig": utils.extend({}, preEnvConfig, preWebpackConfig)
}

export default preConfig