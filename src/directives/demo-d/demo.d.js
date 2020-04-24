export default {
    bind (el, binding, vnode) {
        el.style.position = 'fixed'
        var s = (binding.arg == 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px'
    },
    update (el, binding) {
    
    },
    unbind(el) {
    }
}