import config from 'config'
import router from '../router'

const CONSOLE_REQUEST_ENABLE = config[process.env.NODE_ENV+"Config"].DEBUG_CEFAILT_CONFIG.consoleRequestEnable; //是否开启请求参数打印

/**
 * 请求拦截器成功回调(发送请求之前做的事情)
 * @param {*} requestObj
 */
export function requestSuccessFunc (requestObj) {
    CONSOLE_REQUEST_ENABLE && console.warn('【request-interceptor】', `url: ${requestObj.url}`, requestObj)
    // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
    // ...
    
    return requestObj
}

/**
 * 请求拦截器错误回调(请求错误的回调)
 * @param {*} requestError 
 */
export function requestFailFunc (requestError) {
    // 自定义发送请求失败逻辑，断网，请求发送监控等
    // ...
    
    return Promise.reject(requestError);
}

/**
 * 响应拦截器成功回调(对响应数据做点什么)
 * @param {*} responseObj 
 */
export function responseSuccessFunc (responseObj) {
    // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
    // ...
    // 假设我们请求体为
    // {
    //     "code": "0",
    //     "subCode": "24603800",   //第一位为环境标志位：1为开发环境，2为测试环境，3为预发布环境，4为正式环境，按后7位，indexOf来判断是否请求成功
    //     "message": "操作成功",   
    //     "timeLine": 86,
    //      "bodyMessage": [{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/04/105135151.jpg\",\"chapterSummary\":\"黑色的天空，像是把所有的东西都蒙上了一层黑布，夜里的一切都显得安静而深远。白天的热闹和繁荣在夜色里沉寂，这时候没有喧闹，没有忙碌，只有月光下的静逸。\",\"chapterTitle\":\"备份的很多个\",\"id\":16,\"readShow\":570},{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/04/114246025.jpg\",\"chapterSummary\":\"<section>就撒GDJA股jsa</section>\",\"chapterTitle\":\"更舒服点事干\",\"id\":31,\"readShow\":414},{\"chapterBg\":\"\",\"chapterSummary\":\"感谢大家用热爱生活的正能量传播中华文化，可爱的萌宝爱读书学习，相夫教子的宝妈们善良贤淑，爱家爱生活的宝爸们豪情满怀奋进中国梦!\\n\\n感谢大家给予我们生活的热情与爱国爱家的中华美德传扬!!!\\n\\n致敬友情的花开芬芳，感恩………\",\"chapterTitle\":\"第三方的是非得失\",\"id\":52,\"readShow\":392},{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/06/095209384.jpg\",\"chapterSummary\":\"人生如旅途，过客千千万，谁会为谁而擦肩中停留?谁会为谁而回眸生百媚?谁又会为谁而撕了心裂了肺?这仿佛是迷宫，无法解释，只能在谜中穿梭，偶尔为能找到所谓的出路而欣喜若狂，偶尔为眼前的迷路而发疯发狂!一切皆谜，冷暖自知!\",\"chapterTitle\":\"沙发是否佛挡杀佛\",\"id\":53,\"readShow\":410},{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/06/095243712.jpg\",\"chapterSummary\":\"出生风光进市场， 漂亮身材黄衣裳。维素可佳免疫强， 果实饱满味香甜。东南西北各地闯， 老少皆宜难躲馋。花盘碟子坐玉船， 颜值素来不买荒。\",\"chapterTitle\":\"递四方速递梵蒂冈格式已\",\"id\":54,\"readShow\":3705},{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/06/095520807.jpg\",\"chapterSummary\":\"夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。星，遥遥地挂在天空之中，闪烁着它那微微星光，不如阳光般灿烂却如花儿般如痴如醉。\",\"chapterTitle\":\"胜多负少的股份结核杆\",\"id\":55,\"readShow\":383},{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/13/111422525.jpg\",\"chapterSummary\":\"爱一个人时间长了，\\n好像是忘掉了别的东西，\\n心里只有他，\\n仿佛自己单机一样，\\n单机而已，\\n无需缅怀，\\n都是付出过的，\\n谁也不欠谁的，\\n你真的是那些年月里最烈的酒，\\n我是真的真的认真醉过。\",\"chapterTitle\":\"是对方是否\",\"id\":56,\"readShow\":658},{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/06/100043728.jpeg\",\"chapterSummary\":\"单身的原因，在别人眼里看来，特别是当今社会，似乎只有一个字儿——丑；说得委婉点，就是——颜值低。但说到这里庄十三该跟我急了：”操你大爷，你好好看看，老娘哪里丑？“她的反抗不无道理，确实不算丑，虽然不算高，但是人够瘦啊，身材够好啊，比例协调，一米六的个儿，那比例看起来就是黄金比例，从肚脐开始合理分割，扯这么多就是为了说明腿长；\",\"chapterTitle\":\"沙发上的发送到广东省\",\"id\":57,\"readShow\":436},{\"chapterBg\":\"https://img.wbp5.com/upload/images/master/2019/12/06/100110541.jpeg\",\"chapterSummary\":\"承认自己软弱比故作坚强有用的多\\n小学时班里有个小胖子，那时我们给他起了很多外号，有“胖子”，“包子”，还有比较难听的“胖猪”。\\n每次上体育课跑步测验，班级几个男生就会在一旁起哄，大声说“快来看胖猪跑步咯”，边说边笑，恨不得拿起爆米花在一旁边吃边看笑话。\",\"chapterTitle\":\"热武器若\",\"id\":58,\"readShow\":379},{\"chapterBg\":\"\",\"chapterSummary\":\"气温就像过山车，尤其是我这种整天奔波在路上出差的人，星辰之赐在小城之春体会得更加深切。\",\"chapterTitle\":\"测试文章(请勿删除)\",\"id\":69,\"readShow\":478},{\"chapterBg\":\"\",\"chapterSummary\":\"是对方是否事发生\",\"chapterTitle\":\"的是非得失的但\",\"id\":70,\"readShow\":100490}]"
    // }

    const { status } = responseObj     //http状态码
    console.log(status)
    console.log(responseObj)
    const res = responseObj.data
    if (status === 200) {
        const { subCode } =  res
        const errNotToastSubcode = responseObj.config.subCode.err_notToast      //错误的情况下不需要弹窗的
        const succNotToastSubcode = responseObj.config.subCode.success          //正常的情况下是否需要弹窗不在上层做处理，一律认为是不需要弹窗的，由底层去处理
        const notToastSubcode = errNotToastSubcode.concat(succNotToastSubcode)  //所有不需要弹窗的subCode
        const isNeedToast = notToastSubcode.includes(subCode)       //是否需要弹窗
        if (isNeedToast) {
            //调用全局弹窗，弹窗信息为res.message
        }
        return Promise.resolve(res)
    }else{
        return Promise.reject(res)
    }
}

/**
 * 响应拦截器错误回调(对响应错误做点什么)
 * @param {*} responseError 
 */
export function responseFailFunc (responseError) {
    // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理

    const { response } = responseError
    //console.log(response)       //相当于console.log(responseError.response)
    if (response) {     //请求已发出，但不在2XX的范围
        errorHandle(response.status, response.data.message)     //第一个参数是http状态码，第二个是返回的提示信息
        return Promise.reject(response)
    } else {
        // 处理断网的情况(点击执行异步动作时的断网)
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                // store.commit('changeNetwork', false);
                console.log("断网了")
            } else {
                return Promise.reject(responseError);
            }
    }
}

/**
 * 响应拦截器错误回调处理http状态码
 * @param {Number} status    http状态码
 * @param {String} other     错误信息
 */
const errorHandle = (status, other) => {
    //状态码判断
    switch(status) {
        case 401:   // 401: 未登录状态，跳转登录页(点击执行异步时)
            toLogin();
            break;
        case 403:       // 弹窗提示token过期,清除token并跳转登录页(点击执行异步时)
            // tip('登录过期，请重新登录');
            // localStorage.removeItem('token');
            // store.commit('loginSuccess', null);
            setTimeout(() => {
                toLogin();
            }, 1000);
            break;
        case 404:   // 404请求不存在(点击执行异步时)
            // tip('请求的资源不存在'); //全局弹窗组件 
            break;
        default:
            console.log(other);   
    }
}

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    router.replace({
        path: '/login',        
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}