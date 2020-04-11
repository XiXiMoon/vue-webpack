import Vue from "vue"
import App from './App'

alert("hello");

alert("word")

// 第二种测试css引入方法
// import './styles/demo.css'

// 测试scss文件
// import './styles/demo.scss'

// 测试less文件
import './styles/demo.less'

//测试字体文件
import './styles/font.styl'

var avator = require("./images/2.jpeg")

console.log(avator)

const a = "测试";
console.log(a);

for(let b of [1,2,3,4]) {
    console.log(b);
}

var vm = new Vue({
    el: "#app",
    template:'<App/>',
    components: {App}
})