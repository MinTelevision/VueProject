<template>
  <div id="content_for_layout" class="yhsd-base">
    <div class="yhsd-cart">
      <div class="cart-list-group">
        <ul class="cart-list cart-li-align-center cart-list-ctrlbar">
          <li class="cart-li cart-li-justify">
            <div class="checkbox-group checkbox-inline cart-li-lf">
              <input
                id="yhsdCartCheckAll"
                type="checkbox"
                :checked="ordercarids.length === ordercar.length"
              >
              <label @click="quanxuan()"></label>
            </div>
            <div class="cart-li-mid">
              <span class="cart-li-operator">
                <label @click="quanxuan()">全选</label>
              </span>
            </div>
          </li>
        </ul>

        <ul class="cart-list">
          <li
            v-for="(li,index) in ordercar"
            :key="index"
            class="cart-li cart-li-justify cart-li-product"
          >
            <div class="checkbox-group checkbox-inline cart-li-lf">
              <input type="checkbox" :checked="ordercarids.indexOf(li.guid)>=0">
              <label @click="danxuan(li.guid,li.price)"></label>
            </div>
            <div class="cart-li-mid">
              <div class="cart-li-product-name">
                <div class="cart-li-product-img">
                  <img :src="li.imgurl" :alt="li.name">
                </div>
                <a href="javascript:;" class="cart-li-product-link">
                  <div v-text="li.name" style="padding-top:10px;"></div>
                </a>
              </div>
            </div>
            <div class="cart-li-rt">
              <div class="cart-li-product-info">
                <span class="cart-li-product-price-num">¥{{li.price}}</span>
                <span @click="del(li.guid)" class="cart-li-product-del" data-btn="delete">删除</span>
              </div>
              <div class="cart-li-product-input">
                <div class="cart-li-product-num" v-text="li.num"></div>
                <a
                  href="javascript:void(0);"
                  class="cart-li-product-num-btn cart-li-product-num-reduct"
                  data-btn="quantity-minus"
                  @click="jian(li.num,index,li.guid)"
                >-</a>
                <a
                  @click="jia(li.num,index,li.guid)"
                  href="javascript:void(0);"
                  class="cart-li-product-num-btn cart-li-product-num-add"
                  data-btn="quantity-add"
                >+</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart-balance">
        <a @click="xiadan" class="btn btn-lg btn-balance">下单</a>
        <div class="cart-balance-amount">
          合计：
          <span class="price">¥{{priceAll2}}</span>
          <div class="discount" style>（不含运费）</div>
        </div>
      </div>
      <div v-show="tuijian" class="proList settings-main_border goods_show">
        <div class="proLike-title-box">
          <div class="pro_goods_show-title settings-text_color">推荐商品</div>
          <div class="lower-line"></div>
        </div>
        <div class="proList-inner">
          <ul class="proList-ul clearfix">
            <li>
              <a
                class="proList-img settings-proPic_border"
                href="javascript:;"
                target="_blank"
                title="可可淡卷"
              >
                <img
                  src="//asset.ibanquan.com/image/589211403f8f900988001285/s_330x330.jpeg?epoch=1485967680"
                  alt="可可淡卷"
                >
              </a>
              <a class="proList-desc" href="javascript:;">
                <div class="pro_vendor_name txt-overflow">CocoaRoll</div>
                <div class="proList-name settings-proTitle_color txt-overflow">可可淡卷</div>
                <div class="proList-short_desc settings-desc_color txt-overflow">巧克力淡奶可可戚风卷</div>
                <span class="proList-price settings-price_color">¥22.00</span>
              </a>
            </li>
            <li>
              <a
                class="proList-img settings-proPic_border"
                href="javascript:;"
                target="_blank"
                title="草莓淡卷"
              >
                <img
                  src="//asset.ibanquan.com/image/550903af4812f203af000030/s_330x330.jpg?epoch=1484250230"
                  alt="草莓淡卷"
                >
              </a>
              <a class="proList-desc" href="javascript:;">
                <div class="pro_vendor_name txt-overflow">BerryRoll</div>
                <div class="proList-name settings-proTitle_color txt-overflow">草莓淡卷</div>
                <div class="proList-short_desc settings-desc_color txt-overflow">草莓乳脂戚风淡奶卷</div>
                <span class="proList-price settings-price_color">¥22.00</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/css/lore.css";
import "../assets/css/shenme.css";
import Cookie from "../configs/cookiefun.js";
import { ServerUrl } from "../configs/ServerUrl.js";
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
import $ from "jquery";
export default {
  async created() {
    await Indicator.open({
      spinnerType: "snake"
    });
    this.ordercar = await this.findCart();
    this.tuijian=await true;
    await Indicator.close();
  },
  data() {
    return {
      checked: "", //存放布尔值控制选中和非选中
      allChecked: "", //存放布尔值控制选中和非选中
      ordercarids: [], //存放选中了的ID
      priceAll: [], //数组
      priceAll2: " 0", //数组相加之后显示出来的
      priceoneArr: [],
      priceoneArr2: "", //单数据显示
      ordercar: [],
      tuijian:false
    };
  },
  methods: {
    //渲染
    xiadan() {
      if (this.priceAll2 * 1 >= 1) {
        var now = new Date();
        now.setDate(now.getDate() + 7);
        Cookie.set("jiaqian", this.priceAll2, { expires: now });
        location.href = "/#/buy";
      }

      //好像用不了VUEX 哈哈 那我用别的好了
      // this.$store.state.products=this.priceAll2;
      // console.log(this.$store.state.products);
    },
    findCart() {
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
    //更改数据未做  只改了样式
    jia(num, index, guid) {
      location.reload();
      num = ++this.ordercar[index].num;
      $.ajax({
        type: "get",
        url: ServerUrl + "/goodlist/updateOrder",
        async: true,
        data: {
          num,
          guid
        }
      });
    },
    jian(num, index, guid) {
      location.reload();
      if (this.ordercar[index].num >= 2) {
        num = --this.ordercar[index].num;
        $.ajax({
          type: "get",
          url: ServerUrl + "/goodlist/updateOrder",
          async: true,
          data: {
            num,
            guid
          }
        });
      }
    },

    //从标签传下来的数据
    danxuan(ordercarid, priceone) {
      let idIndex = this.ordercarids.indexOf(ordercarid);
      if (idIndex >= 0) {
        //取消选中
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.ordercarids.splice(idIndex, 1);
        this.allChecked = false;
        this.priceAll = [];
        this.priceAll2 = "";
        //删除数组某一个元素
        for (var i = 0; i < this.priceoneArr.length; i++) {
          if (this.priceoneArr[i] == priceone) {
            this.priceoneArr.splice(i, 1);
            break;
          }
        }

        //这里单项反选清一下全选按钮的数组 换个数组进行渲染
        this.priceAll = [];

        this.priceAll2 = eval(this.priceoneArr.join("+"));
        // removeByValue(somearray, "tue");
      } else {
        //单数据显示 加法还没做
        this.priceAll2 = priceone;
        // 选中该checkbox
        //let idIndex2 = this.priceoneArr.indexOf(priceone);
        //if (idIndex2 < 0) {
        this.priceoneArr.push(priceone);
        this.priceAll2 = eval(this.priceoneArr.join("+"));
        //

        //拼数组 进行全选判断
        this.ordercarids.push(ordercarid);
        //全选按钮相关
        //因为全选按钮我设了两个绑定方式。。所以多写了一次价格相关和全选 详见两个IF
        if (this.ordercarids.length == this.ordercar.length) {
          //跟下面代码一样
          this.allChecked = true;
          this.ordercar.forEach(function(item2) {
            this.priceAll.push(item2.price);
          }, this);
          this.priceAll2 = eval(this.priceAll.join("+"));
        }
      }
    },
    //全选按钮
    quanxuan() {
      this.allChecked = !this.allChecked;
      if (this.allChecked) {
        // 全选时   空数组把id都拼起来
        this.ordercarids = [];
        this.ordercar.forEach(function(item) {
          this.ordercarids.push(item.guid);
        }, this);
        //价格相加 空数组把price都拼起来然后把数组里的数全部相加
        this.ordercar.forEach(function(item2) {
          this.priceAll.push(item2.price);
        }, this);
        this.priceAll2 = eval(this.priceAll.join("+"));
        //单选的数组也存放一下
        this.priceoneArr = []; //单选数组清0 不清会再点反选时把单选的也加上
        this.ordercar.forEach(function(item2) {
          this.priceoneArr.push(item2.price);
        }, this);
        this.priceAll2 = eval(this.priceoneArr.join("+"));
      } else {
        //取消全选清0
        this.ordercarids = [];
        this.priceAll = [];
        this.priceAll2 = " 0";
        this.priceoneArr = [];
        this.priceAll2 = " 0";
      }
    },

    // del(guid){
    //   $.ajax({
    //       type: "get",
    //       url: ServerUrl + "/goodlist/delete",
    //       async: true,
    //       data:{
    //         guid
    //       },success(str){
    //         console.log(str);

    //       }
    //     });
    // },
    //删除单个
    del: function(guid) {
      let instance = Toast({
        message: "删除成功",
        position: "middle",
        iconClass: "iconfont icon-gou"
      });
      setTimeout(() => {
        instance.close();
      }, 1500);
      location.reload();
      this.$.ajax({
        type: "get",
        url: ServerUrl + "/goodlist/delete",
        data: {
          guid
        }
      });
    }
  }
};
</script>

<style scoped >
.goods_show {
  margin-bottom: 30px;
}
.pro_goods_show-title {
  font-size: 12px;
  margin: 0px auto;
  padding: 0 2%;
  width: 22%;
  text-align: center;
  font-weight: 100;
  position: absolute;
  top: 6px;
  left: 50%;
  margin-left: -11%;
  background: transparent;
}
.pro_goods_show-title:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -1.5px;
  height: 3px;
  width: 3px;
  background: #000;
  transform: rotate(45deg);
}
.pro_goods_show-title:after {
  content: "";
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1.5px;
  height: 3px;
  width: 3px;
  background: #000;
  transform: rotate(45deg);
}
.lower-line {
  border-bottom: 0px solid #000;
  height: 0.5px;
}
.proLike-title-box {
  text-align: center;
  padding: 14px 0px 14px;
  position: relative;
  width: 100%;
}
.goods_show .proList-ul li {
  padding-bottom: 10px;
  margin-bottom: 1%;
  background: #fff;
}
.goods_show-title {
  font-size: 12px;
  margin: 10px 0 10px;
}
</style>
