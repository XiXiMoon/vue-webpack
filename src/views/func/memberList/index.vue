<template>
    <div class="memberList-container">
        会员管理
        <span>mapActions设置电话号码</span>
        <input type="number" v-model="phone">
        <div @click="setPhone">确定</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'memberList',

    data() {
        return {
            phone: 0
        }
    },

    methods: {
        //mapActions(提交->Action 提交的是 mutation，而不是直接变更状态，Action 可以包含任意异步操作。 )

        //传统方法
        // setPhone() {
        //     this.saveTelPhone(this.phone);
        // },

        // saveTelPhone(phone) {
        //     console.log(this.$store)
        //     this.$store.dispatch({
        //         type: 'userInfo/saveTelPhone',
        //         telphone: phone
        //     })
        // }

        //演变1
        setPhone() {
            this.saveTelPhone(this.phone);
        },

        ...mapActions({
            saveTelPhone: 'userInfo/saveTelPhone'   ///将this.saveTelPhone()方法映射为this.$store.dispatch('userInfo/saveTelPhone'), saveTelPhone方法为actions中对应的函数名
        })

        //演变2(此方式不适用)
        // setPhone() {
        //     this.saveTelPhone(this.phone);
        // },

        // ...mapActions([
        //     'saveTelPhone'  //将this.saveTelPhone()方法映射为this.$store.dispatch('saveTelPhone')，此处用了module，不能这样写
        // ])
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