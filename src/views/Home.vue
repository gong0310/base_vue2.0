<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>base</h1>
    <Base msg="Welcome to Your Vue.js App" />
    <hr />
    <h1>路由</h1>
    <ul>
      <li v-for="item in list" :key="item.src" @click="handleRouterTo(item)">{{ item.name }}</li>
    </ul>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive">
          <!-- 这里是会被缓存的视图组件-->
        </router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive">
        <!-- 这里是不被缓存的视图组件 -->
      </router-view>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Base from '@/components/Base.vue'

export default {
  name: 'Home',
  components: {
    Base
  },
   provide:{
    c: 'provide传过来的'
  },
  data() {
    return {
      list: [
        {
          path: '/routerA',
          name: 'RouterA'
        },
        {
          path: '/routerB',
          name: 'RouterB'
        },
      ]
    }
  },
  methods: {
    handleRouterTo(item) {
      // this.$router.push({
      //   path:item.path,
      //   query:{
      //     msg:'路由query传值'
      //   },
      // })
      this.$router.push({
        name: item.name,
        params: {
          msg: '路由params传值'
        },
      })
      // ----------------
      // 需要在路由配置
      // routes: [
      //   path: '/XXX/:msg',
      //   component: xxx
      // ]
      // this.$router.push({
      //   path: item.path + '路由params2传值',
      // })
    },
  }
}
</script>
<style scoped lang="less">
li {
  cursor: pointer;
  margin: 20px 0;
  padding: 0;
  list-style: none;
  background-color: aquamarine;
  background-color: bisque;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
