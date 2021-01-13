<template>
  <div class="fromoutsidbox">
    <div>
      <h1>一、填空题({{ page + 1 }}/{{ TKTARR.length }})</h1>
      <div class="q" :key="i" v-for="(item, i) in TKTARR">
        <div v-if="page === i">
          {{ i + 1 }}、{{ item.title }}
          <div :key="n" v-for="(atem, n) in item.value">
            <input class="inputtkong" type="text" v-model="atem.model" />
          </div>
        </div>
      </div>

      <div class="pagebox">
        <div
          class="li"
          :class="{ clicked: page === i }"
          v-for="(item, i) in TKTARR"
          :key="i"
          @click="pageclick(i)"
        >
          {{ i + 1 }}
        </div>
      </div>
      <van-button
        type="default"
        style="margin-right: 20px"
        @click="last"
        v-if="page > 0"
      >
        上一题
      </van-button>
      <van-button type="primary" @click="next">提交</van-button>
    </div>
    <div>
      <h1>一、单选题({{ pagedx + 1 }}/{{ TKDAN_XUAN.length }})</h1>
      <div class="q" :key="i" v-for="(item, i) in TKDAN_XUAN">
        <div v-if="pagedx === i">
          <h2 class="dxhstyle">{{ item.title }}({{ item.value }})</h2>
          <div :key="n" v-for="(atem, n) in item.q">
            <span @click="secelectDaxuan(i, atem.t)">
              {{ atem.t }}.{{ atem.v }}</span
            >
          </div>
        </div>
      </div>
      <div class="pagebox">
        <div
          class="li"
          :class="{ clicked: pagedx === i }"
          v-for="(item, i) in TKDAN_XUAN"
          :key="i"
          @click="pagedxclick(i)"
        >
          {{ i + 1 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog, Button, Toast } from "vant";
import "vant/lib/index.less";
import "@/assets/plugins/flexible.min.js";
import { TKTARR, TKDAN_XUAN } from "@/utils/formdata.js";
let obj = {};
let arrDatatitle = [];
for (var i = 0; i < TKTARR.length; i++) {
  for (var a = 0; a < TKTARR[i].value.length; a++) {
    arrDatatitle.push("value" + i + a);
  }
}

for (var n = 0; n < arrDatatitle.length; n++) {
  obj[arrDatatitle[n]] = "";
}
// console.log(obj);
// console.log(arrDatatitle);

Vue.use(Button);
export default {
  data() {
    return {
      bigpage: 1,
      page: 0,
      pagedx: 0,
      TKTARR,
      TKDAN_XUAN,
      arrDatatitle,
    };
  },
  components: {},
  methods: {
    //单选选中
    secelectDaxuan(i, e) {
      // console.log(i, e);
      if (this.TKDAN_XUAN[i].d != e) {
        Toast("答案错误，该选" + this.TKDAN_XUAN[i].d);
        // this.TKDAN_XUAN[i].value = this.TKDAN_XUAN[i].d;
      } else {
        this.TKDAN_XUAN[i].value = this.TKDAN_XUAN[i].d;
      }
    },
    pageclick(page) {
      this.page = page;
    },

    pagedxclick(page) {
      this.pagedx = page;
    },
    getdan(value) {
      Dialog.confirm({
        title: "提示",
        message: "请正确填写答案！",
        confirmButtonText: "查看答案",
      }).then(() => {
        // Toast(TKTARR[this.page].value.toString());
        for (var i = 0; i < this.TKTARR[this.page].value.length; i++) {
          this.TKTARR[this.page].value[i].model = this.TKTARR[this.page].value[
            i
          ].text;
        }
        // this.page = this.page + 1;
      });
    },

    truedan(page) {
      for (var i = 0; i < this.TKTARR[this.page].value.length; i++) {
        if (
          this.TKTARR[this.page].value[i].model ==
          this.TKTARR[this.page].value[i].text
        ) {
          return true;
        } else {
          return false;
        }
      }
    },

    next(i) {
      const dan = this.truedan(this.page);

      if (dan) {
        this.page = this.page + 1;
        if (this.page > 14) {
          this.bigpage = 1;
        }
      } else {
        this.getdan();
      }
    },
    last() {
      this.page = this.page - 1;
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.fromoutsidbox {
  font-size: 0.4rem;
  color: #666;
}
.fromoutsidbox .q {
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 1rem;
}
.fromoutsidbox h1 {
  font-size: 0.45rem;
  font-weight: normal;
}
.inputtkong {
  border: none;
  border-bottom: 1px solid #999;
  color: black;
}
.pagebox .li {
  width: 1rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  border: 1px solid #999;
  display: inline-block;
  border-radius: 500px;
  margin-left: 0.4rem;
  margin-bottom: 0.4rem;
}
.pagebox .clicked {
  border-color: #07c160;
  color: #07c160;
}
.dxhstyle {
  font-weight: normal;
  color: #333;
  font-size: 0.42rem;
}
</style>