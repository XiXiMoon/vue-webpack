//环境变量定义
const path = require("path");
const env = process.env.NODE_ENV;

module.exports = {
    NODE_ENV: "pre",
    BASE_URL: "https://www.huihun.com",  //打开地址
    BASE_API: "http://124.47.119.154:8175",   //接口地址
    OUTPUT_PATH: "../../delop-code/pre",   //输出目录
}