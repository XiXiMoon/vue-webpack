//测试环境配置，全部接真实api数据
import utils from '../../tool'
import testEnvConfig from './env-conf.test'
import testWebpackConfig from './webpack-conf.test'


const testConfig = utils.extend({}, testEnvConfig, testWebpackConfig);

export default testConfig