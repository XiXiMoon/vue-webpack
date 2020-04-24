<template>
    <div class="registe-container">
        注册
        {{  time |  timeLongFormat_zh}}
        <input type="text"/> <br>
        <input type="text" />   <br>
        <input type="text" v-focus/>
    </div>
</template>

<script>
import {timeLongFormat_zh} from 'filters/time-filter.s'
import focus from 'directives/focus-s/index'

// console.log(focus)

export default {
    name: 'registe',
    data() {
        return {
            time: 60000
        }
    },
    filters: {
        timeLongFormat_zh
    },
    directives: {
        focus
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