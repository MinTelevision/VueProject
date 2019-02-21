<template>
  <div class="center">
    <ul class="table-view center-top">
      <li class="table-view-cell">
        <span class="table-view-cell-l">
          <a href="javascript:;" class="center-head">
            <span
              class="customer-img"
              style="background-image:url('//asset.ibanquan.com/image/5c654ecccf0a0722df00000f/46804ba98226cffc9feef019b4014a90f403ea9f.jpg');"
            ></span>
            <span href="javascript:;" class="center-head-info">
              <p class="center-head-name" v-text="username"></p>
              <p class="center-head-points">经验值：0分</p>
            </span>
          </a>
        </span>
      </li>
    </ul>
    <ul class="table-view center-order-btn">
      <li class="table-view-cell">
        <span class="table-view-cell-l">我的订单</span>
      </li>
      <li class="table-view-cell">
        <span class="table-view-cell-l">
          <nav class="tab">
            <a href="javascript:;" class="tab-item">
              <span  style="padding-top:5px;"  class="tab-item-icon-wrap">
                <i style="font-weight:bold;color:#666666; font-size:22px;" class=" iconfont icon-dingdan"></i>
              </span>
              <br>全部订单
            </a>
            <a href="javascript:;" class="tab-item">
              <span style="padding-top:5px;" class="tab-item-icon-wrap">
                <i style="font-weight:bold;color:#666666; font-size:22px;" class=" iconfont icon-fukuan"></i>
                <span class="tab-pill" data-order-status="waitPay"></span>
              </span>
              <br>待付款
            </a>
            <a href="javascript:;" class="tab-item">
              <span style="padding-top:5px;" class="tab-item-icon-wrap">
                <i style="font-weight:bold;color:#666666; font-size:22px;" class=" iconfont icon-daishouhuo"></i>
                <span class="tab-pill" data-order-status="shipment"></span>
              </span>
              <br>待收货
            </a>
            <a href="javascript:;" class="tab-item">
              <span style="padding-top:5px;" class="tab-item-icon-wrap">
                <i style="font-weight:bold;color:#666666; font-size:22px;" class=" iconfont icon-yiwancheng"></i>
              </span>
              <br>已完成
            </a>
          </nav>
        </span>
      </li>
    </ul>
    <div class="table-view">
      <a href="javascript:;" class="table-view-cell table-view-cell-arr">
        <span class="table-view-cell-l">会员等级</span>
        <span class="table-view-cell-r"></span>
      </a>
    </div>
    <div class="table-view">
      <a href="javascript:;" class="table-view-cell table-view-cell-arr">
        <span class="table-view-cell-l">优惠券</span>
        <span class="table-view-cell-r"></span>
      </a>
      <a href="javascript:;" class="center-point table-view-cell table-view-cell-arr" style>
        <span class="table-view-cell-l">积分</span>
        <span class="table-view-cell-r"></span>
      </a>
    </div>
    <div class="table-view">
      <a href="javascript:;" class="table-view-cell table-view-cell-arr">
        <span class="table-view-cell-l">个人资料</span>
        <span class="table-view-cell-r"></span>
      </a>
      <a href="javascript:;" class="table-view-cell table-view-cell-arr" style>
        <span class="table-view-cell-l">安全设置</span>
        <span class="table-view-cell-r"></span>
      </a>
      <a href="javascript:;" class="table-view-cell table-view-cell-arr">
        <span class="table-view-cell-l">收货地址</span>
        <span class="table-view-cell-r"></span>
      </a>
    </div>
    <ul class="table-view center-logout">
      <li class="table-view-cell">
        <a
          @click="cancel"
          href="javascript:;"
          class="center-log-out table-view-cell-l"
        >退出当前账号</a>
      </li>
    </ul>
  </div>
</template>

<script>
import Cookie from "../configs/cookiefun.js";
import { Indicator } from "mint-ui";
export default {
  name: "Mine",
  data() {
    return {
      username: "未登录"
    };
  },
  created() {
    
    if(Cookie.get("name")){
      
      this.username =Cookie.get("name");
    }
  },
  methods: {
    async cancel() {
      await Indicator.open({
          spinnerType: "snake"
      });
      await Cookie.remove("name");
      await location.reload();
      await Indicator.close();
      location.href=await "http://localhost:8080/#/app/login";
    }
  }
};
</script>

<style>

</style>
