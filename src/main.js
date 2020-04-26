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

//引入Vuex状态管理Store
import store from './store'

//引入filters全局过滤器
import * as filters from './filters/filter-global'

// console.log(filters)
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

//引入directives全局自定义指令
import directives from './directives'

// console.log(directives)
Object.keys(directives).forEach(key => {
    Vue.directive(key, directives[key])
})

import axios from './utils/http'
console.log(axios)

//vue框架实例化
var vm = new Vue({
    el: "#app",
    render: h => h(App),
    router,
    store       // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件,子组件能通过 this.$store.state.XXX 访问到
})

//后续可打断点调试此文件，方便研究vue的源码
// console.log(Vue);
// console.log(App);
// console.log(vm);