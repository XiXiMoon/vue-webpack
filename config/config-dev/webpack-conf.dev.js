//环境变量定义
const path = require("path");
const env = process.env.NODE_ENV;

const webpackConfig = {
    MODE: 'development',
    DEV_TOOLS: 'cheap-module-eval-source-map'
}

export default webpackConfig