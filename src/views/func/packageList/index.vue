<template>
    <div class="packageList-container">
        套餐管理
    </div>
</template>

<script>
import { funcMixin } from 'mixins/func-mixin'

export default {
    name: 'packageList',
    mixins: [funcMixin]
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.packageList-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>