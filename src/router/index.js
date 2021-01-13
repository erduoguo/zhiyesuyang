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
      {
        path: "/ques/zy",
        name: "职业素养",
        component: resolve => require(['../views/quesZysuyang/zy.vue'], resolve),
        meta: { title: '职业素养' },
        // component: () => import("../views/mobileapp/wxfrom.vue")
      },
    ]
  },


];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
