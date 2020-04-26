const envConfig = {
    HOST_PLATFORM: 'WEB',
    NODE_ENV: "dev",    //当前环境
    NEED_MOCK: true,       //是否需要mock数据功能
    OPEN_URL: "http://localhost:8088",  //调试打开地址
    BASE_API: "http://101.35.161.134:8235",   //接口地址
    OUTPUT_PATH: "../../delop-code/dev",   //打包输出目录,
    AXIOS_DEFAULT_CONFIG: {     // axios 默认配置
        timeout: 20000,
        maxContentLength: 2000,
        headers: {}
    },
    VUEX_DEFAULT_CONFIG: {     //vuex 默认配置
        strict: process.env.NODE_ENV !== 'production'
    },
    ROUTER_DEFAULT_CONFIG: {   //路由默认配置
        mode: 'history'
    },
    CONSOLE_REQUEST_ENABLE: true,   //开启请求参数打印
    CONSOLE_RESPONSE_ENABLE: true,   //开启响应参数打印
    IMG_DOMAIN_URL: 'http://devimgs.wbp5.com' //图片服务地址
}

export default envConfig