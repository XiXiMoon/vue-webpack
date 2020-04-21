<template>
    <div class="log-container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'log'
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.log-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>