<template>
    <div class="login-container">
        登录
        {{byteSize | bytesToSize}}
        <div v-demo:[direction]="200">测试demo的自定义指令</div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'login',
    data() {
        return {
            byteSize: 1000,
            direction: 'left'
        }
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.login-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>