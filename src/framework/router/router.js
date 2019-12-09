
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
  },
  Calendar = () => {
    return import(
      /* WebpackChunkName:"common" */ "@/components/functional/Calendar.vue");
  },
  ProjectReport = () => {
    return import(
      /* WebpackChunkName:"common" */ "@/components/functional/ProjectReport.vue");
  },
  Collection = () => {
    return import(
      /* WebpackChunkName:"common" */ "@/components/functional/Collection.vue");
  },
  Feedback = () => {
    return import(
    /* WebpackChunkName:"common" */ "@/components/functional/Feedback.vue");
  },
  Rating = () => {
    return import(
    /* WebpackChunkName:"common" */ "@/components/functional/Rating.vue");
  };

Vue.use(Router);

const router = new Router({
  "routes": [{
    "path": "/",
    "name": "LoginScreen",
    "component": LoginScreen
  },
  {
    "path": "/home",
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
  },
{
    "path": "/functional/calendar",
    "name": "calendar",
    "component": Calendar
  },
  {
    "path": "/functional/projectReport",
    "name": "projectReport",
    "component": ProjectReport
  },
  {
    "path": "/functional/collection",
    "name": "collection",
    "component": Collection
  },
  {
    "path": "/functional/feedback",
    "name": "feedback",
    "component": Feedback
  },
  {
    "path": "/functional/rating",
    "name": "rating",
    "component": Rating
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
