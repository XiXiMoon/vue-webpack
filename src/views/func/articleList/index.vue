<template>
    <div class="articlelList-container">
        文章管理
        <!-- {{ getHobbys }} -->
        {{habbyCount}}

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'articlelList',
    computed: {
        //mapGetters(获取->里面可以做操作再返回出去，类似store的计算属性)用法：

        //传统方式使用mapGetters，放computed中，是为了在变化的时候，重新求取计算属性，并触发更新相关连的DOM
        // getHobbys() {
        //     //第一种方式 通过属性访问(不传参)，[模块名/getters中对应的方法名]，Getter 会暴露为 store.getters 对象，子组件访问根组件的通过this.$store，getter 在通过属性访问时是作为 Vue 的响应式系统的一部分缓存其中的。
        //     // return this.$store.getters["userInfo/hobbyCount"]  
        //     // return this.$store.getters["userInfo/hobby"]
            
        //     //第二种方式
        //     // return this.$store.state.userInfo.hobbys.filter(todo => todo.done)   

        //     //第三种方式：通过方法访问(传参)。getter 在通过方法访问时，每次都会去进行调用，而不会缓存结果
        //     return this.$store.getters["userInfo/matchId"](1)
        // }

        //演变1
        ...mapGetters({
            habbyCount: ["userInfo/hobbyCount"]  //把this.count 映射为 this.$store.getters["userInfo/hobbyCount"]
        })

        //演变2(此处不适用)
        // ...mapGetters([ 
        //     'hobbyCount'    //把this.hobbyCount映射为this.$store.getters.hobbyCount情况下，才能这样写，此处用了module，不能这样写
        // ])
    }
}
</script>

<style lang="less" scoped>
@import (less) '~static/styles/variable.less';

.articlelList-container{
    color:#000;
    font-size:@FontSize_1;
}
</style>