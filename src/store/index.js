import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import createLogger from 'vuex/dist/logger'
import * as Cookies from 'js-cookie'
import SecureLS from "secure-ls";
var ls = new SecureLS({ isCompression: false });

import userInfo from './modules/userInfo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

console.log(debug)

const createPersisted = createPersistedState({
    key: 'vuex',
    reducer(val) {
        return {    //存取哪些数据,val相当于总的vuex的state
            userInfo: val.userInfo,
            // hobbys: val.userInfo.hobbys
        }
    }
})

const store = new Vuex.Store({
    modules: {
        userInfo
    },
    plugins: debug ? [createLogger(), createPersisted] : [createPersisted]
})

export default store

console.log(store.state.userInfo)