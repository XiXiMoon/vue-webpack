const envConfig = {
    HOST_PLATFORM: 'WEB',
    NODE_ENV: "test",    //当前环境

    OPEN_URL: "http:8088",  //调试打开地址
    OUTPUT_PATH: "../../delop-code/test",   //打包输出目录,

    AXIOS_DEFAULT_CONFIG: {     // axios 默认配置
        timeout: 20000,
        maxContentLength: 2000,
        headers: {},
        baseURL: "http://120.77.212.58:31688"
    },
    MOCK_DEFAULT_CONFIG: {  //MOCK默认配置
        mockBaseURL: 'http://localhost:3000',   //express本地mock的baseURL
        mock: false,       //是否需要强制开启mock数据功能,
        debug: false,
        sep: '/'            //分隔符
    },
    CONST_DEFAULT_CONFIG: {     // CONST 默认配置
        sep: '/'
    },
    DEBUG_CEFAILT_CONFIG: {     //调试默认配置
        consoleRequestEnable: true, //开启请求参数打印
        consoleResponseEnable: true    //开启响应参数打印
    },

    ROUTER_DEFAULT_CONFIG: {   //路由默认配置
        mode: 'history'
    },

    VUEX_DEFAULT_CONFIG: {     //vuex 默认配置
        strict: process.env.NODE_ENV !== 'production'
    },
    
    SERVICE_API_CONFIG: {
        imgDomainUrl: 'http://testimgs.wbp5.com' //图片服务地址
    },
    
}

export default envConfig