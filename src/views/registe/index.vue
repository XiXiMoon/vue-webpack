<template>
    <div class="registe-container">
        注册
        {{  time |  timeLongFormat_zh}}
    </div>
</template>

<script>
import {timeLongFormat_zh} from 'filters/time-filter.s'

export default {
    name: 'registe',
    data() {
        return {
            time: 60000
        }
    },
    filters: {
        timeLongFormat_zh
    }
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.registe-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>