import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      // {
      //   path: '/',
      //   name: '首页',
      //   component: Home,
      //   meta: { title: '首页' },
      // },
      {
        path: "/",
        name: "问卷调研",
        component: resolve => require(['../views/mobileapp/wxfrom.vue'], resolve),
        meta: { title: '问卷调研' },
        // component: () => import("../views/mobileapp/wxfrom.vue")
      },
      {
        path: "/ques/zy",
        name: "问卷调研",
        component: resolve => require(['../views/quesZysuyang/zy.vue'], resolve),
        meta: { title: '问卷调研' },
        // component: () => import("../views/mobileapp/wxfrom.vue")
      },
    ]
  },


];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
