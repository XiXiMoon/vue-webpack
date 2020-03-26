import Vue from "vue"
//import App from './App'

alert("hello");

// 第二种测试css引入方法
// import './styles/demo.css'

// 测试scss文件
// import './styles/demo.scss'

// 测试less文件
// import './styles/demo.less'

import './styles/demo.styl'

var vm = new Vue({
    el: "#app",
    data: {
        msg:"hello vue"
    }
})