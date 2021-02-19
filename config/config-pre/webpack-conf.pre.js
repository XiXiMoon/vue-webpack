//环境变量定义
const path = require("path");
const env = process.env.NODE_ENV;

const webpackConfig = {
    DEV_TOOLS: 'cheap-module-source-map'
} 

export default webpackConfig