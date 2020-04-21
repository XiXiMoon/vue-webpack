<template>
    <div class="func-container">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'func'
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.func-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>