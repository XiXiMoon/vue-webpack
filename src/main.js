import Vue from "vue"
//import App from './App'

alert("hello");

// 第二种测试css引入方法
// import './styles/demo.css'

// 测试scss文件
// import './styles/demo.scss'

// 测试less文件
import './styles/demo.less'

var avator = require("./images/2.jpeg")

console.log(avator)

const a = "测试";
console.log(a);

for(let b of [1,2,3,4]) {
    console.log(b);
}

var vm = new Vue({
    el: "#app",
    data: {
        msg:"hello vue"
    }
})