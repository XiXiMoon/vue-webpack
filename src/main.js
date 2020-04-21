//引入vue框架文件，方便后面实例化
import Vue from "vue"

//引入项目整体的根组件
import App from './App'

//引入整体全局所有的样式文件
import 'static/styles/index.less'

//引入antM基础组件库
// import antM from "./antM"

// Vue.use(antM)

//引入路由文件
import router from './router'

//vue框架实例化
var vm = new Vue({
    el: "#app",
    render: h => h(App),
    router
})

//后续可打断点调试此文件，方便研究vue的源码
// console.log(Vue);
// console.log(App);
// console.log(vm);