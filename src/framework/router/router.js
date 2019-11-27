
/*eslint-disable*/
import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";

const LoginScreen = () => {
    return import(
      /* WebpackChunkName:"common" */ "@/components/common/Login_1.vue");
  },
  PageNotFound = () => {
    return import(
      /* WebpackChunkName:"common" */ "@/components/common/PageNotFound.vue");
  },
  NotPermitted = () => {
    return import(
      /* WebpackChunkName:"common" */ "@/components/common/NotPermitted.vue");
  },
  Help = () => {
    return import(
    /* WebpackChunkName:"common" */ "@/components/common/Help.vue");
  },
  Home = () => {
    return import(
    /* WebpackChunkName:"common" */ "@/components/common/Home.vue");
  };

Vue.use(Router);

const router = new Router({
  "routes": [{
    "path": "/",
    "name": "LoginScreen",
    "component": LoginScreen
  },
  {
    "path": "/Home",
    "name": "/Home",
    "component": Home
  },
  {
    "path": "/common/notPermitted",
    "name": "NotPermitted",
    "component": NotPermitted
  },
  {
    "path": "/admin",
    "redirect": "/login"
  },
  {
    "path": "*",
    "redirect": "/404"
  },
  {
    "path": "/404",
    "name": "PageNotFound",
    "component": PageNotFound
  },
  {
    "path": "/common/help",
    "name": "Help",
    "component": Help
  }]
});
router.beforeEach((to, from, next) => {
  NProgress.start();
  NProgress.set(0.5);
  next();
});
router.afterEach((to, from) => {
  NProgress.done();
  to;
  from;
});
export default router;
