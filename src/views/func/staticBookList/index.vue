<template>
    <div class="staticBookList-container">
        静态文案管理
    </div>
</template>

<script>
import { funcMixin } from 'mixins/func-mixin'

export default {
    name: 'staticBookList',
    mixins: [funcMixin]
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.staticBookList-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>