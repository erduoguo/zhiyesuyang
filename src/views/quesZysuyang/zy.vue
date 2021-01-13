<template>
  <div class="fromoutsidbox">职业素养</div>
</template>

<script>
// import confirm from "ant-design-vue/es/modal/confirm";

import { Dialog } from "vant";
import "vant/lib/index.less";
import wx from "weixin-js-sdk";

import "@/assets/plugins/flexible.min.js";
import {
  getDetail,
  answerCollect,
  getopenidFrom,
  haveGetDetail,
} from "@/services/from.js";

export default {
  data() {
    return {
      jsonData: {},
      fromname: "",
      fromsmallname: "",
      openId: "",
      showHtml: 3,
    };
  },
  components: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style scoped>
.fromoutsidbox {
  max-width: 640px;
  margin: 0 auto;
  padding: 2rem 0;
}
.stylbutton {
  margin-left: 10px;
}
.htmlbox {
  background: #fff;
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  border-radius: 20px;
  padding: 1rem;
  /* margin-top: 1rem;
  margin-bottom: 1rem; */
}
.fxedbox {
  background: #58b5be;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
}
.styleh1 {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.5rem;
}
.styleh2 {
  /* padding: 0.6rem; */
  font-weight: normal;
  font-size: 0.4rem;
}
.nodata {
  text-align: center;
}
.nodata img {
  width: 2rem;
}
.nodata p {
  margin-top: 0.6rem;
  font-size: 0.6rem;
  color: #999;
}
</style>