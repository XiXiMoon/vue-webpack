/**
 * 1、错误统一处理
 *      含断网处理、404处理、未登录处理、超时处理、取消请求处理、
 * 2、权限处理(页面级、按钮级)
 * 3、数据Mock
 * 4、多环境处理
 * 5、分域需求
 */

import axios from 'axios'
import config from 'config'
import {requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from './httpCb'

const INSTANCE_DEFAULT_CONFIG = config[process.env.NODE_ENV+"Config"].AXIOS_DEFAULT_CONFIG;

console.log(INSTANCE_DEFAULT_CONFIG)

// alert(process.env.NODE_ENV)
let axiosInstance = {}
//axios示例
axiosInstance  = axios.create(INSTANCE_DEFAULT_CONFIG);   

// console.log(axiosInstance)

//请求拦截器
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)

//响应拦截器
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

// export default {
//     post() {
        
//     },

//     get() {

//     },

//     delete() {

//     },

//     put() {

//     }
// }


export default axiosInstance