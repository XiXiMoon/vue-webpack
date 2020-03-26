//线上环境(生产环境)环境变量配置
const path = require("path");
const env = process.env.NODE_ENV;

module.exports = {
    NODE_ENV: "prod",
    BASE_URL: "https://www.huihun.com",  //打开地址
    BASE_API: "http://124.47.119.154:8175",   //接口地址
    OUTPUT_PATH: "../../delop-code/prod",   //输出目录
}