export const logMixin = {
    data() {
        return {
        }
    },
    methods: {
        getData() {
            console.log("log的mixins")
        }
    },
    mounted() {
        this.getData()
    }
}