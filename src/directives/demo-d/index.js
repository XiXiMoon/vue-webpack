import demo from './demo.d'

const install = function(Vue) {
    Vue.directive('demo', demo)
}

if (window.Vue) {
    window['demo'] = demo
    Vue.use(install); // eslint-disable-line
}

demo.install = install
export default demo