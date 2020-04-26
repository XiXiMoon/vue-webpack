/**
 * 1、错误统一处理
 *      含断网处理、404处理、未登录处理、超时处理、取消请求处理、
 * 2、权限处理(页面级、按钮级)
 * 3、数据Mock
 * 4、多环境处理
 * 5、分域需求
 */

import axios from 'axios'
import config from '../../config/index.js'

// console.log(config);

alert(process.env.NODE_ENV)

const Axios  = axios.create({
    timeout: 10000, //设置超时时间
})



export default config
