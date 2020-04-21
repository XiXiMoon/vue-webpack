import breadcrumb from './breadcrumb'
import slideBar from "./slide-bar"
import pageNav from "./page-nav"

import vue from "vue"

const antM = {
    breadcrumb,
    slideBar,
    pageNav
}


for (const item of Object.values(antM)) {
    if (!item.install && item.name) {
        item.install = function (Vue) {
            Vue.component(`${item.name}`, item);
        };
    }
}

const install = function (Vue, opts = {}) {
    if (install.installed) return;
    for (const item of Object.values(antM)) {
        if (item.install) {
            Vue.use(item, opts.prefix);
        }
    }
    Vue.prototype.$VUEANTM = { size: opts.size || '' };
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
window.Vue = vue;

export {
    breadcrumb,
    slideBar,
    pageNav
}

export default {
    install,
};