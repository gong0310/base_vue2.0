<template>
  <div class="about">
    <h1>vueX</h1>
    count：{{ $store.state.count }} mapState: {{count}}
    <button @click="handelAddCount">mutations</button>
    <button @click="handelMinCount">actions</button>
    <p>getter:{{ $store.getters.multiplyCount }}</p>
    <hr/>
    <p>moduleA</p>
    user: {{ $store.state.moduleA.user}} {{user}}
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    // ...mapState(['count']), // 在组件通过this就可调用，不用再写this.$store.state
    ...mapState({ // 另一种写法
      count: state=>state.count,
      user: state=>state.moduleA.user
    }),
    ...mapGetters(['multiplyCount']),
  },
  mounted() {
    console.log('mapState count=>', this.count)
  },
  methods: {
    // ...mapMutations(['undaptCountAdd', 'undaptCountMin']),
    ...mapMutations(['undaptCountAdd', 'undaptCountMin','setUser']),
    // 定义别名方式
    // ...mapMutations({
    //   undaptCountAdd: 'undaptCountAdd',
    //   setUser: 'moduleA/setUser'
    // }),
    handelAddCount() {
      this.undaptCountAdd(2)
      // this.$store.commit('undaptCountAdd', 2)
      // this.$store.commit('moduleA/setUser', '余')
      this.setUser('余')
    },
    ...mapActions(['undaptCountMinAction']),
    // 定义别名方式
    // ...mapActions({
    //   changeNumber1ActionAlias: 'changeNumber1Action',
    //   changeNumber2ActionAlias: 'changeNumber2Action'
    // }),
    handelMinCount() {
      this.undaptCountMinAction(2)
      // this.$store.dispatch('undaptCountMinAction', 2)
    },
  }
}
</script>
