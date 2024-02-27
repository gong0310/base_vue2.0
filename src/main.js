import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// 全局指令
Vue.directive("aaa", {
  inserted(el) {
    console.log("1234");
    //元素聚焦
    el.focus();
  },
});
// 全局过滤器
Vue.filter('msgFormat', function(msg){ // 第一个参数永远是管道符前面传过来的值
  //字符串的 replace方法，第一个参数，除了可写一个字符串之外，还可以定义一个正则
  return msg.replace(/徐/g, "陈");
})
// 使用Vue.extend来创建全局的Vue组件
var com1 = Vue.extend({
  template: '<h3>这是使用Vue.extend创建的组件</h3>'
})
Vue.component('Mycom1', com1); 