import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// hack router push callback
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "routerA:msg",
        name: "RouterA",
        meta: { keepAlive: true },
        component: () =>
          import(/* webpackChunkName: "routerA" */ "../views/RouterA.vue"),
      },
      {
        path: "routerB",
        name: "RouterB",
        meta: { keepAlive: true },
        component: () =>
          import(/* webpackChunkName: "routerB" */ "../views/RouterB.vue"),
      },
    ],
  },
  {
    path: "/vueX",
    name: "VueX",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VueX.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log("router.beforeEach ===>", to, from);
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
  next();
});
/*在跳转之后判断*/
router.afterEach((to, from) => {
  console.log("router.afterEach ===>", to, from);
});
export default router;
