import Vue from "vue";

import App from "./App.vue";
import router from "./router";

import VueCookies from 'vue-cookies'

// import store from "./store";
import KFormDesign from "k-form-design"
// import KFormDesign from 'k-form-design/lib/k-form-design-mini.umd.min'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import 'k-form-design/lib/k-form-design.css'
Vue.use(KFormDesign)
Vue.use(VueCookies)
// Vue.use(Antd)

// import Vue from 'vue';
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

// import { Dialog } from 'vant';

// 全局注册
// Vue.use(Dialog);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount("#app");
