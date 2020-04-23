<template>
    <div class="systemLog-container">
        系统日志
    </div>
</template>

<script>
import { logMixin } from 'mixins/log-mixin'

export default {
    name: 'systemLog',
    mixins: [logMixin]
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.systemLog-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>