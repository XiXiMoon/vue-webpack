import Vue from "vue"
import App from './App'

import 'static/styles/index.less'

var vm = new Vue({
    el: "#app",
    template:'<App/>',
    components: {App}
})