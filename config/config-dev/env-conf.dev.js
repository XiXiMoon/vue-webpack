const envConfig = {
    HOST_PLATFORM: 'WEB',
    NODE_ENV: "dev",    //当前环境
    OPEN_URL: "http://localhost:8088",  //调试打开地址
    OUTPUT_PATH: "../../delop-code/dev",   //打包输出目录,
    AXIOS_DEFAULT_CONFIG: {     // axios基本配置
        timeout: 20000,         //超时时间
        maxContentLength: 2000,     //
        headers: {},        //请求头
        baseURL: "http://120.25.195.4:31688"   //基础路径（前缀）
    },
    VUEX_DEFAULT_CONFIG: {     //vuex 默认配置
        strict: process.env.NODE_ENV !== 'production'
    },
    ROUTER_DEFAULT_CONFIG: {   //路由默认配置
        mode: 'history'
    },
    API_DEFAULT_CONFIG: {  //API 默认配置
        mockBaseURL: 'http://localhost:3000',   //express本地mock的baseURL
        mock: true,       //是否需要强制开启mock数据功能,
        debug: false,
        sep: '/'            //分隔符
    },
    DEBUG_CEFAILT_CONFIG: {     //调试默认配置
        consoleRequestEnable: true, //开启请求参数打印
        consoleResponseEnable: true    //开启响应参数打印
    },
    SERVICE_API_CONFIG: {
        imgDomainUrl: 'http://devimgs.wbp5.com' //图片服务地址
    },
    CONST_DEFAULT_CONFIG: {     // CONST 默认配置
        sep: '/'
    }
}

export default envConfig