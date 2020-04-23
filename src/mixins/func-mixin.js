export const funcMixin = {
    data() {
        return {
        }
    },
    methods: {
        getData() {
            console.log("测试func的mixins")
        }
    },
    mounted() {
        this.getData()
    }
}