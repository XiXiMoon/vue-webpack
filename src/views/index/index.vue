<template>
    <div class="index-container">
        首页 
        <span @click="app">点击了</span>
        {{getTelphone}}
        <!-- {{telphone}} -->
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'index',
    methods: {
        app() {
            const a = '我点击了';
            console.log(a)
        }
    },
    computed: {
        //mapState(直接获取->中间不做任何操作)用法：

        //传统方式使用state，放computed中，是为了在变化的时候，重新求取计算属性，并触发更新相关连的DOM
        // getTelphone () {    
        //     return this.$store.state.userInfo.telphone   //store注册到根组件中，子组件通过this.$store来拿
        // }

        //演变1
        ...mapState({
            getTelphone: (state) => state.userInfo.telphone
        })

        //演变2(此处不适用)
        // ...mapState([       // 映射 this.count 为 store.state.count情况下，才能这样写，此处用了module，不能这样写
        //     'telphone'
        // ])
    }
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.index-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>