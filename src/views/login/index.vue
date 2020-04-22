<template>
    <div class="login-container">
        登录
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'login',
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