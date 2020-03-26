import Vue from "vue"
//import App from './App'

alert("hello");

// 第二种测试css引入方法
// import './styles/demo.css'

// 测试scss文件
// import './styles/demo.scss'

import './styles/demo.less'

var vm = new Vue({
    el: "#app",
    data: {
        msg:"hello vue"
    }
})