<template>
  <div class="mobile-footernav">
    <ul>
      <li @click="dianji" class="footernav-index-li footernav-li">
        <router-link
          to="/"
          href="javascript:;"
          class="footernav-index"
          :class="{'active':page=='icakes'}"
        >
          <div>首页</div>
        </router-link>
      </li>
      <li @click="dianji" class="footernav-class-li footernav-li">
        <router-link
          to="/app/products"
          href="javascript:;"
          class="footernav-class"
          :class="{'active':page=='products'}"
        >
          <div>分类列表</div>
        </router-link>
      </li>
      <li @click="dianji" class="footernav-cart-li footernav-li">
        <router-link
          :to="routerlink2"
          href="javascript:;"
          class="footernav-cart"
          :class="{'active':page=='cart'}"
        >
          <span id="yhsd_topCart_quantityTitle">{{gouwuchenum}}</span>
          <div>购物车</div>
        </router-link>
      </li>
      <li @click="dianji" class="footernav-account-li footernav-li">
        <router-link
          :to="routerlink"
          href="javascript:;"
          class="footernav-account"
          :class="{'active':page=='mine'||page=='login'||page=='register'}"
        >
          <div>我</div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import Cookie from "../configs/cookiefun.js";
import { ServerUrl } from "../configs/ServerUrl.js";
import $ from "jquery";
export default {
  name: "Cfoot",
  async created() {
    if (Cookie.get("name")) {
      this.gouwuchenum = await this.huoqugouwuche();
    } else {
      this.gouwuchenum = await 0;
    }
    
    if (Cookie.get("name")) {
      this.routerlink = "/app/mine";
    } else {
      this.routerlink = "/app/login";
    }

    if (Cookie.get("name")) {
      this.routerlink2 = "/app/cart";
    } else {
      this.routerlink2 = "/app/login";
    }
    let luyou = this.$route.name;
    this.page = luyou;
  },

  data() {
    return {
      page: "",
      routerlink: "",
      routerlink2: "",
      gouwuchenum: ""
    };
  },
  methods: {
    dianji() {
      let luyou = this.$route.name;
      this.page = luyou;
    },
    huoqugouwuche() {
      return new Promise(function(resolve) {
        $.ajax({
          type: "get",
          url: ServerUrl + "/goodlist/findorder",
          async: true,
          success: function(str) {
            //成功回调
            // console.log(str.data.length);
            // this.gouwuchenum=str.data.length
            resolve(str.data.length);
          }
        });
      });
    }
  }
};
</script>
<style>
</style>