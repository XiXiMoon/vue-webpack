//环境变量定义
const path = require("path");
const env = process.env.NODE_ENV;

module.exports = {
    NODE_ENV: "dev",
    BASE_URL: "http://localhost:8088",  //打开地址
    BASE_API: "http://101.35.161.134:8235",   //接口地址
    OUTPUT_PATH: "../../delop-code/dev",   //输出目录
}