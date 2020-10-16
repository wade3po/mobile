import Vue from 'vue'
import VueRouter from 'vue-router'
VueRouter.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index/Index.vue'),
    meta: {
      title: "首页",
    },
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "index" */ '../views/user/User.vue'),
    meta: {
      title: "个人中心",
    },
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "404" */ '../views/common/404.vue'),
    meta: {
      title: "404",
    },
  },
  {
    path: "*",
    redirect: "/404",
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title;
  next();
});
export default router
