<template>
    <div class="permissionList-container">
        权限管理
    </div>
</template>

<script>
import { funcMixin } from 'mixins/func-mixin'

export default {
    name: 'permissionList',
    mixins: [funcMixin]
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.permissionList-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>