import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import createLogger from 'vuex/dist/logger'

import userInfo from './modules/userInfo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const createPersisted = createPersistedState({
    storage: window.sessionStorage,  //默认使用localstorage
    reducer(val) {
        telphone: val.telphone
    }
})

export default new Vuex.Store({
    modules: {
        userInfo
    },
    plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})