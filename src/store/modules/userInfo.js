import * as types from '../mutations-types'

//state
//实质上就是一个对象状态
const state = {
    telphone: 0,
    hobbys: [
        {id:1, text: '足球', done: true},
        {id:2, text: '篮球', done: false}
    ]
}


//getters
//实质上就是一些函数，参数有state、getters，函数中做一些公共的操作。比如过滤等
const getters = {
    hobby: (state, getters) => state.hobbys.filter(todo => todo.done),  //接受第一个参数为state、第二个参数为其他 getter
    hobbyCount: (state, getters) => getters.hobby.length,
    matchId: (state) => (id) => state.hobbys.find(todo => todo.id === id)
}

//mutations
//实质上就是一些函数，参数有state、传进来的参数(可为对象可为数组等，需要做相应改动即可)
const mutations = {
    [types.SET_TELPHONE](state, telphone) {
        state.telphone = telphone
    },
}

//actions
const actions = {
    saveTelPhone: ({commit}, telphone) => {
        // commit(types.SET_TELPHONE, savePhone(telphone))
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}



