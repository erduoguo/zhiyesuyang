<template>
  <div class="fromoutsidbox">
    <div v-if="showHtml == 1">
      <div class="htmlbox">
        <h1 class="styleh1">{{ fromname }}</h1>
        <h2 class="styleh2">{{ fromsmallname }}</h2>
        <div class="frombox">
          <k-form-build :value="jsonData" ref="kfb" />
        </div>
        <a-button type="primary" @click="submitData"> 提交 </a-button>
        <a-button class="stylbutton" @click="cleardata">清空</a-button>
      </div>
      <div class="fxedbox"></div>
    </div>
    <div class="nodata" v-else-if="showHtml == 0">
      <img src="@/assets/img/isnoicon.png" alt="" />
      <p>该问卷已失效!</p>
      <!-- <p style="">可查看其它调研</p> -->
    </div>
  </div>
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
  methods: {
    cleardata() {
      this.$refs.kfb.reset();
    },
    submitData() {
      const parm = {
        contents: "",
        questionnaireId: this.$route.query.id,
        source: "wx",
        surveyId: this.$route.query.surveyId,
        userId: this.$cookies.get("openid"),
      };
      const that = this;
      const urltype = this.$route.query.type;

      if (urltype == "pc") {
        Dialog.confirm({
          title: "提示",
          message: "确定要提交吗？",
        }).then(() => {
          that.$message.success("提交成功！");
        });
        console.log("pc提交");
      } else {
        this.$refs.kfb
          .getData()
          .then((values) => {
            parm.contents = JSON.stringify(values);
            Dialog.confirm({
              title: "提示",
              message: "确定要提交吗？",
            })
              .then(() => {
                answerCollect(parm).then((res) => {
                  // console.log(res.);
                  if (res.data.code == 200) {
                    that.$message.success("提交成功！");
                    setTimeout(() => {
                      wx.closeWindow();
                    }, 2000);
                  } else {
                    that.$message.error(res.data.msg);
                  }
                });
              })
              .catch(() => {
                console.log("取消");
              });
          })
          .catch(() => {
            console.log("验证未通过，获取失败");
          });
      }
    },
    getDetaildata() {
      const that = this;
      const parm = {
        id: this.$route.query.id,
      };
      haveGetDetail(parm).then((ref) => {
        if (ref.data.code == 200) {
          that.jsonData = JSON.parse(ref.data.data.content);
          that.fromname = ref.data.data.name;
          that.fromsmallname = ref.data.data.info;
          this.$cookies.set("appid", ref.data.appid);
          this.showHtml = 1;
        } else {
          this.showHtml = 0;
        }
      });
    },
    getDetailsurveyId() {
      const that = this;
      const parm = {
        id: this.$route.query.surveyId,
      };
      getDetail(parm).then((ref) => {
        if (ref.data.code == 200) {
          that.jsonData = JSON.parse(ref.data.data.content);
          that.fromname = ref.data.data.name;
          that.fromsmallname = ref.data.data.info;
          this.$cookies.set("appid", ref.data.appid);
          this.showHtml = 1;
        } else {
          this.showHtml = 0;
        }
      });
    },
    getopneid(code) {
      const that = this;
      const parm = {
        code: code,
      };
      getopenidFrom(parm).then((res) => {
        this.$cookies.set("openid", res.data.data);
      });
    },
    getcode() {
      const winUrl = encodeURIComponent(window.location);
      var url =
        "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx38e5623b22786703&redirect_uri=" +
        winUrl +
        "&response_type=code&scope=snsapi_base&state=123&component_appid=wx0c4d26cf811e3d43#wechat_redirect";
      if (!this.$route.query.code) {
        window.location.href = url;
      } else {
        this.getopneid(this.$route.query.code);
      }
    },
  },
  created() {
    if (this.$route.query.surveyId) {
      this.getDetailsurveyId();
    } else {
      this.getDetaildata();
    }
    // this.$cookies.set("openid"); //调试
    const thatopenid = this.$cookies.get("openid");
    const urltype = this.$route.query.type;
    if (!thatopenid && urltype != "pc") {
      this.getcode();
    }
  },
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