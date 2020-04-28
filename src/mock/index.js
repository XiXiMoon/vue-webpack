
import Mock from 'mockjs'
import loginAPI from './login'          //引入分模块mock的数据
import articleAPI from './articleList'

// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)         //接口article/list，请求方法为get返回article.js导出的getList方法(也就是根据url参数，返回对应数据的方法)

export default Mock