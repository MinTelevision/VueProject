<template>
  <div id="content_for_layout" class="yhsd-base">
    <div class="create-order">
      <ul class="table-view" data-btn="address">
        <li data-btn="go_address" class="table-view-cell table-view-cell-arr order-address">
          <span class="table-view-cell-l">
            <span class="order-address-name">联系电话</span>
            <span class="order-address-phone">{{username}}</span>
            <br>
            <span class="order-address-detail">寄送至:{{thisSP3}}-{{thisSP2}}-{{thisSP}}</span>
            <i
              style="position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    font-size: 22px;
    color: #999;"
              class="iconfont icon-dingwei"
            ></i>
          </span>
          <span class="table-view-cell-r iconfont icon-you"></span>
        </li>
      </ul>
      <div class="choose-payment">
        <form action="javascript:void(0);">
          <h4>支付方式</h4>
          <ul>
            <li data-btn="payment_selector" data-payment_type="online">
              <div class="radio-group">
                <input type="radio" id="yhsdPaymentOnline" name="yhsdPaymentSelect" checked>
                <label for="yhsdPaymentOnline">在线支付</label>
              </div>
            </li>
          </ul>
        </form>
      </div>
      <div class="table-view order-pro">
        <!-- ---------------------------------- -->
        <div v-for="(li,index) in order" :key="index" class="table-view-cell">
          <a href="javascript:;" class="table-view-cell-l">
            <div class="order-pro-each">
              <div class="order-pro-each-img">
                <img :src="li.imgurl" :alt="li.name">
              </div>
              <div class="order-pro-each-name">{{li.name}}</div>
              <div class="order-pro-each-sku">蛋糕编号:{{li.guid}}</div>
            </div>
          </a>
          <span class="table-view-cell-r">
            <div class="order-pro-each-price">
              <div class="price">¥{{li.price}}</div>
              <div class="times">×{{li.num}}</div>
            </div>
          </span>
        </div>
        <!-- ---------------------------------- -->
        <a href="javascript:;" class="table-view-cell table-view-cell-arr order-shipment">
          <span class="table-view-cell-l">配送方式</span>
          <span class="table-view-cell-r">商家自送 - 免邮</span>
        </a>
      </div>
      <ul class="table-view">
        <li class="table-view-cell order-create-input">
          <span class="table-view-cell-l" style="width: 82px; max-width: 82px;">
            <span>送达日期</span>
          </span>
          <span class="table-view-cell-r">
            <select name="devOther" id="devOther">
              <option value="今天 2019-02-18">今天 2019-02-18</option>
              <option value="2019-02-19">2019-02-19</option>
              <option value="2019-02-20">2019-02-20</option>
              <option value="2019-02-21">2019-02-21</option>
              <option value="2019-02-22">2019-02-22</option>
              <option value="2019-02-23">2019-02-23</option>
              <option value="2019-02-24">2019-02-24</option>
              <option value="2019-02-25">2019-02-25</option>
              <option value="2019-02-26">2019-02-26</option>
              <option value="2019-02-27">2019-02-27</option>
              <option value="2019-02-28">2019-02-28</option>
              <option value="2019-03-01">2019-03-01</option>
              <option value="2019-03-02">2019-03-02</option>
              <option value="2019-03-03">2019-03-03</option>
              <option value="2019-03-04">2019-03-04</option>
              <option value="2019-03-05">2019-03-05</option>
              <option value="2019-03-06">2019-03-06</option>
              <option value="2019-03-07">2019-03-07</option>
              <option value="2019-03-08">2019-03-08</option>
              <option value="2019-03-09">2019-03-09</option>
              <option value="2019-03-10">2019-03-10</option>
              <option value="2019-03-11">2019-03-11</option>
              <option value="2019-03-12">2019-03-12</option>
              <option value="2019-03-13">2019-03-13</option>
              <option value="2019-03-14">2019-03-14</option>
              <option value="2019-03-15">2019-03-15</option>
              <option value="2019-03-16">2019-03-16</option>
              <option value="2019-03-17">2019-03-17</option>
              <option value="2019-03-18">2019-03-18</option>
              <option value="2019-03-19">2019-03-19</option>
            </select>
          </span>
        </li>
      </ul>
      <ul class="table-view">
        <li class="table-view-cell order-create-input">
          <span class="table-view-cell-l" style="width: 82px; max-width: 82px;">
            <span>配送时间段</span>
          </span>
          <span class="table-view-cell-r">
            <select name="delivery_period" id="delivery_period">
              <option value="请选择配送时间段">请选择配送时间段</option>
              <option value="中午 12:00 - 14:00">中午 12:00 - 14:00</option>
              <option value="下午 14:00 - 16:00">下午 14:00 - 16:00</option>
              <option value="下午 16:00 - 18:00">下午 16:00 - 18:00</option>
              <option value="晚上 18:00 - 20:00">晚上 18:00 - 20:00</option>
              <option value="其他时间段配送请于备注中留言">其他时间段配送请于备注中留言</option>
            </select>
          </span>
        </li>
      </ul>
      <ul class="table-view date_select_style">
        <li class="table-view-cell order-create-input">
          <span class="table-view-cell-l" style="width: 82px; max-width: 82px;">
            <span>巧克力字牌</span>
          </span>
          <span class="table-view-cell-r">
            <input id="yhsdOrderMeta-生日牌内容" type="text" placeholder="免费，6个汉字内" value>
          </span>
        </li>
      </ul>
      <ul class="table-view">
        <li class="table-view-cell order-create-input">
          <span class="table-view-cell-l" style="width: 82px; max-width: 82px;">
            <span>留言</span>
          </span>
          <span class="table-view-cell-r">
            <input id="yhsdOrderRemark" type="text" placeholder="给卖家留言" value>
          </span>
        </li>
      </ul>
      <ul class="table-view">
        <li class="table-view-cell table-view-cell-arr order-coupon" data-btn="go_coupon">
          <span class="table-view-cell-l">优惠券</span>
          <span class="table-view-cell-r iconfont icon-you">
            <span style="color: #777;">使用优惠券</span>
          </span>
        </li>
        <li class="table-view-cell table-view-cell-arr order-coupon" data-btn="go_point">
          <span class="table-view-cell-l">
            积分
            <span style="color:#999;font-size:12px;">
              (剩余积分：
              <span id="yhsdTotalPoint">0</span>，可使用积分：
              <span id="yhsdAvailablePoint">0</span>)
            </span>
          </span>
          <span class="table-view-cell-r">
            <span style="color: #777;">积分抵现</span>
          </span>
        </li>
      </ul>

      <ul class="table-view order-bill">
        <li class="table-view-cell table-view-cell-noborder">
          <span class="table-view-cell-l">商品金额总计</span>
          <span class="table-view-cell-r">¥{{zhifuprice}}</span>
        </li>
        <li class="table-view-cell table-view-cell-noborder">
          <span class="table-view-cell-l">运费总计</span>
          <span class="table-view-cell-r">¥0.00</span>
        </li>
        <li class="table-view-cell table-view-cell-noborder order-bill-amount">
          <span class="table-view-cell-l">应付总额</span>
          <span class="table-view-cell-r">¥{{zhifuprice}}</span>
        </li>
      </ul>
      <ul class="table-view">
        <li @click="fanhui" class="table-view-cell order-create-input">
          <span class="table-view-cell-l" style="width: 82px; max-width: 82px;">
            <span>点此返回</span>
          </span>
          <span class="table-view-cell-r">
            <span class="iconfont icon-fanhui" style="font-size:20px; color: #777;"></span>
          </span>
        </li>
      </ul>
      <ul class="table-view create-order-pay">
        <li class="create-order-address-tip">
          <table>
            <tbody>
              <tr>
                <th>寄送至：</th>
                <td>{{thisSP3}} {{thisSP2}} {{thisSP}}</td>
              </tr>
              <tr>
                <th>收货人：</th>
                <td>{{username}}</td>
              </tr>
            </tbody>
          </table>
        </li>
        <li class="table-view-cell">
          <span class="table-view-cell-r">
            <span class="create-order-amount-wrap">
              应付总额：
              <span>¥{{zhifuprice}}</span>
              <div class="create-order-pay-point">可获得积分：{{zhifuprice*1+27}}</div>
            </span>
          </span>
          <button @click="zhifu" class="btn btn-lg btn-balance" data-btn="create_order">提交订单</button>
        </li>
      </ul>
    </div>
    <mt-popup v-model="popupVisible" position="top">
      <img style="width:250px;" height="250px" src="../assets/twoweihorse.jpg" alt>
    </mt-popup>
  </div>
</template>

<script>
import "../assets/css/lore.css";
import Cookie from "../configs/cookiefun.js";
import getCurrentCityName from "../configs/baidu.js";
import getCurrentProvinceName from "../configs/baidu2.js";
import { ServerUrl } from "../configs/ServerUrl.js";
import $ from "jquery";
import Vue from "vue";
import { Popup } from "mint-ui";
import { Indicator } from "mint-ui";
Vue.component(Popup.name, Popup);

export default {
  name: "buy",
  data() {
    return {
      popupVisible: false,
      username: "",
      order: [],
      zhifuprice: "",
      thisSP: "", //百度城市
      thisSP2: "", //百度省份
      thisSP3: "" //静态国家
    };
  },
  methods: {
    fanhui(){
      this.$router.back(-1)
    },
    //支付按钮
    zhifu() {
      Indicator.open({
        text: "加载中....",
        spinnerType: "snake"
      });
      setTimeout(() => {
        Indicator.close();
        this.popupVisible = true;
      }, 800);
    },
    //渲染
    findCar() {
      return new Promise(function(resolve) {
        $.ajax({
          type: "get",
          url: ServerUrl + "/goodlist/findorder",
          async: true,
          success: function(str) {
            //成功回调
            resolve(str.data);
          }
        });
      });
    },
    //获取城市
    getCurrentCity() {
      this.$store.state.city ||
        getCurrentCityName().then(city => {
          this.thisSP = city;
        });
    },
    //获取省份
    getCurrentProvince() {
      this.$store.state.province ||
        getCurrentProvinceName().then(province => {
          this.thisSP2 = province;
        });
    }
  },
  async created() {
    var tel = await Cookie.get("name");
    var sss = (await tel.substring(0, 3)) + "****" + tel.substring(8, 11);
    this.username = sss;
    this.order = await this.findCar();
    this.zhifuprice = Cookie.get("jiaqian");
    // this.$store.state.products=this.priceAll2;
    //   console.log(this.$store.state.products);
  },
  mounted() {
    var yunxu = confirm("您确定要iCakes获取您的地址吗？");
    if (yunxu == true) {
      this.getCurrentCity();
      this.getCurrentProvince();
      this.thisSP3 = "中国";
    } else {
      return;
    }
  }
};
</script>

<style>
</style>
