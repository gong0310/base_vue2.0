<template>
    <div>{{ title }}</div>
</template>
<script>
export default {
    data() {
        return {
            title: 'routerA'
        }
    },
    created() {
        console.log('this.$route 路由信息', this.$route)
    },
    beforeRouteEnter(to, from, next) {
        console.log("beforeRouteEnter ===>", to, from);
        next(vm => {
            console.log("beforeRouteEnter next ===>", vm);
        })
    },
    beforeRouteUpdate(to, from, next) {
        console.log("beforeRouteUpdate ===>", to, from);
        next()
    },
    beforeRouteLeave(to, from,next) {
        console.log("beforeRouteLeave ===>", to, from);
        next()
    },
}
</script>