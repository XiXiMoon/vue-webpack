<template>
    <div class="feedbackList-container">
        反馈管理
        <span>mapMutations设置电话号码：</span>
        <input type="number" v-model="phone">
        <div @click="setPhone">确定</div>
    </div>
</template>

<script>
import * as types from "../../../store/mutations-types"
import {mapMutations} from 'vuex'

export default {
    name: 'feedbackList',

    data() {
        return {
            phone: 0
        }
    },

    methods: {
        //mapMutations(提交->更改Vuex 的 store 中的状态的唯一方法是提交 mutation，mutation必须是同步函数，mutation 都是同步事务)用法：

        //传统方法
        // setPhone() {
        //     this.$store.commit({
        //         type: 'userInfo/'+types.SET_TELPHONE,
        //         telphone: this.phone
        //     })
        // }

        //演变1
        setPhone() {
            this.setTelphone(this.phone)
        },

        ...mapMutations({
            setTelphone: 'userInfo/'+types.SET_TELPHONE, //将this.setTelphone()方法映射为this.$store.commit('userInfo/'+types.SET_TELPHONE)
        })

        //演变2(此处不适用)
        // ...mapMutations([
        //     'setTelphone'   //将this.setTelphone()映射为this.$store.commit('setTelphone'),  此处用了module，不能这样写
        // ])
    }
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.feedbackList-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>