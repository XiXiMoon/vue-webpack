//开发环境配置, 需单独一个命令开启全mock数据，一个命令开启全真实接口数据，一个命令开启当真实接口数据挂掉用mock数据替代的
import {utils} from '../../src/utils/tools'
import devEnvConfig from './env-conf.dev'
import devWebpackConfig from './webpack-conf.dev'


const devConfig = {
    "devConfig": utils.extend({}, devEnvConfig, devWebpackConfig)
}

export default devConfig