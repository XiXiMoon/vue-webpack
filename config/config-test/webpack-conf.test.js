//测试环境环境变量配置
const path = require("path");
const env = process.env.NODE_ENV;

module.exports = {
    NODE_ENV: "test",
    BASE_URL: "https://huihuntestol.tostar.top/",  //打开地址
    BASE_API: "http://101.37.159.154:8075",   //接口地址
    OUTPUT_PATH: "../../delop-code/test",   //输出目录
}