<template>
  <div>
    <Ctop/>
    <div style="padding-top:45px;" class="Products-nav-inside-w">
      <div class="Products-nav-inner clearfix lazyload_scope">
        <div
          id="owl-slider"
          class="owl-carousel clearfix owl-theme"
          style="opacity: 1; display: block;"
        >
          <div class="owl-wrapper-outer">
            <div class="owl-wrapper" style="height:28.6px; left: 0px; display: block;">
              <!-- ------------------------------------------------ -->
              <div
                @click="tab(index)"
                v-for="(n,index) in nav"
                :key="index"
                class="owl-item"
                style="width: 94px;"
              >
                <a
                  :class="{'active':page==index}"
                  class="owl-item txt-overflow owl-item-a"
                  data-handle="bdcakes"
                  id="navlink_810160"
                  href="javascript:;"
                  style="width: 94px;"
                  v-text="n"
                ></a>
              </div>
              <!-- ------------------------------------------------ -->
            </div>
            <div class="owl-controls">
              <div class="owl-buttons">
                <div class="owl-prev"></div>
                <div class="owl-next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="typePro">
        <div class="wrapper wrapper-proList">
          <div class="cont">
            <div class="proList">
              <div class="proList-inner">
                <ul class="proList-ul clearfix proList-count-3 lazyload_scope">
                  <!-- ------------------------------------------------ -->
                  <li
                    @click="savessg(li.guid)"
                    v-for="(li,index) in shuju"
                    :key="index"
                    :guid="li.guid"
                  >
                    <a
                      class="proList-img settings-proPic_border"
                      href="javascript:;"
                      :title="li.name"
                    >
                      <img class :src="li.imgurl" :alt="li.name">
                    </a>
                    <a class="proList-desc" href="javascript:void(0);" :title="li.name">
                      <div class="pro_vendor_name txt-overflow" v-text="li.Ename"></div>
                      <div
                        class="proList-name settings-proTitle_color txt-overflow"
                        v-text="li.name"
                      ></div>
                      <span
                        class="proList-short_desc settings-desc_color txt-overflow"
                        v-text="li.jianjie"
                      ></span>
                      <span class="proList-price settings-price_color">￥{{li.price}}</span>
                    </a>
                    
                    <a class="proList-addCart" href="javascript:void(0);" data-handle="lilili">购买</a>
                  </li>
                  <!-- ------------------------------------------------ -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Cbird/>
  </div>
</template>
<script>
import Ctop from "../components/Ctop.vue";
import Cbird from "../components/Cbird.vue";
import { ServerUrl } from "../configs/ServerUrl.js";
import { Indicator } from "mint-ui";

export default {
  components: {
    Ctop,
    Cbird
  },
  methods: {
    chashuju() {
      let n = this;
      return new Promise(function(resolve) {
        n.$.ajax({
          type: "get", //请求方式
          url: ServerUrl + "/goodlist/findAll",
          async: true, //异步
          data: {},
          success(str) {
            resolve(str.data);
          }
        });
      });
    },
    tab(index) {
      this.page = index;
      switch (index) {
        case 0:
          this.shuju = this.list.filter(item => {
            return item.type == "birth";
          });
          break;
        case 1:
          this.shuju = this.list.filter(item => {
            return item.type == "paper";
          });
          break;
        case 2:
          this.shuju = this.list.filter(item => {
            return item.type == "box";
          });
          break;
        case 3:
          this.shuju = this.list.filter(item => {
            return item.type == "roll";
          });
          break;
        case 4:
          this.shuju = this.list.filter(item => {
            return item.type == "other";
          });
          break;
      }
    },
    savessg(guid) {
      sessionStorage.setItem("key", JSON.stringify(this.list[guid - 1]));
      location.href = "/#/detail";
    }
  },
  async created() {
    await Indicator.open({
          spinnerType: "snake"
      });
    this.list = await this.chashuju(); //await执行完然后mon挂载
    this.shuju = await this.list.filter(item => {
      return item.type == "birth";
    });
    await Indicator.close();
  },
  //async mounted(){
  // var name = this.list.toString()
  //       sessionStorage.setItem('objStr', name)
  //---
  // var arr = sessionStorage.getItem('key');
  // var array = JSON.parse(arr);
  // this.ssg=array;
  // console.log(this.ssg);

  //},

  data() {
    return {
      nav: ["生日蛋糕", "纸杯蛋糕", "盒子蛋糕", "淡卷切片", "附件配饰"],
      list: [],
      shuju: [],
      page: "",
      ssg: ""
    };
  }
};
</script>
<style scoped>
***specialProducts*** .owl-carousel {
  display: none;
  position: relative;
}
.owl-carousel .owl-wrapper {
  display: none;
  position: relative;
  -webkit-transform: translate3d(0px, 0px, 0px);
}
.owl-carousel .owl-wrapper-outer {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin: 0 auto;
}
.owl-carousel .owl-item {
  display: inline-block;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  margin: 3px 0 0 0;
}
.owl-carousel .owl-item a {
  padding: 6px 10px;
  margin: 0 auto;
  color: #666;
  max-width: 64px;
  display: block;
  float: none;
  border-bottom: 3px solid #fff;
  transition: all 0.3s;
}
.owl-item-a {
  transition: all 0.3s;
}
.owl-carousel .owl-item.owl-item-a.active {
  border-bottom: 3px solid #000;
  color: #f30907;
}
.owl-carousel .owl-item.owl-active-a {
  color: #000;
}
.Products-nav {
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
}

.Products-nav-inner {
  display: block;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d4d4d4;
}
.Products-nav-inside-w {
  margin: 0;
}
.owl-theme .owl-controls .owl-buttons .owl-prev {
  position: absolute;
  left: 0;
  top: 0;
  height: 26px;
  line-height: 26px;
  padding: 0;
  margin: 0;
  border-radius: 0;
  background-color: transparent;
  color: #000;
}
.owl-theme .owl-controls .owl-buttons .owl-next {
  position: absolute;
  right: 0;
  top: 0;
  height: 26px;
  line-height: 26px;
  padding: 0 5px 0 0;
  margin: 0;
  border-radius: 0;
  background-color: #fff;
  color: #000;
  font-size: 12px;
  transform: scale(0.7, 0.7);
  pointer-events: none;
}
.owl-theme .owl-controls .owl-buttons .owl-next:after {
  content: "";
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #000;
  border-bottom: 5px solid transparent;
  position: absolute;
  top: 50%;
  right: 4px;
  margin-top: -4px;
}
.owl-carousel .owl-item .text-color-white {
  color: transparent;
}
#typePro {
  margin-top: 1%;
  transition: all 0.4s;
}
#typePro.opacity_0 {
  opacity: 0;
}
.wrapper-proList {
  margin-top: 0;
}
::-webkit-scrollbar {
  display: none;
}

/* white-space:nowrap;height:145px;width: 100%; left: 0px; display: block;overflow-x:scroll;::-webkit-scrollbar:display: none; */
</style>