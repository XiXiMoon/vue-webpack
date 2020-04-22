<template>
    <div class="memberList-container">
        会员管理
        <span>mapActions设置电话号码</span>
        <input type="number" v-model="phone">
        <div @click="setPhone">确定</div>
    </div>
</template>

<script>
import * as types from '../../../store/mutations-types'

export default {
    name: 'memberList',

    data() {
        return {
            phone: 0
        }
    },

    mounted() {
        this.saveTelPhone();
    },
    methods: {
        //mapActions(提交->Action 提交的是 mutation，而不是直接变更状态，Action 可以包含任意异步操作。 )

        //传统方法
        setPhone() {
            this.saveTelPhone(this.phone);
        },

        saveTelPhone(phone) {
            console.log(this.$store)
            this.$store.dispatch({
                type: 'userInfo/saveTelPhone',
                telphone: phone
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.memberList-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>