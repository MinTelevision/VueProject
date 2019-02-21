<template>
  <div class="wrapper wrapper-slide" >
    <div class="cont">
      <div class="mod slide">
        <div class="flexslider settings-block_background">
          <div class="flex-viewport" style="overflow: hidden; position: relative;">
            <ul class="slides" style="width: 800%; height:261px;">
              <transition-group  :name="transitionName" tag="div" class="roll">
                <li
                @touchstart.stop.prevent="touchstart"
              @touchmove.stop.prevent="touchmove"
              @touchend.stop.prevent="touchend"
                v-show="index==page"
                  style="width: 414px;  display: block;position:absolute;"
                  v-for="(b,index) in banner"
                  :key="index+1"
                >
                  <a href="javascript:;">
                    <img width="100%" :src="b.imgurl">
                  </a>
                </li>
              </transition-group>

              <!-- <li style="width: 414px; float: left; display: block;">
                <a href="/products/coffeesquare">
                  <img
                    width="100%"
                    src="//asset.ibanquan.com/asset/5bc963ef53f4e32535000064/index_slide_1?v=1539924975"
                  >
                </a>
              </li>-->
              <!-- <transition-group name="list" tag="div" class="roll">
                <a
                  href="javascript:;"
                  class="tops-item flex flex-justify-between flex-align-center"
                  v-for="(b,index) in banner"
                  :key="index+1"
                  v-show="index==page"
                >
                  <span class="flex-child-grow lines-1" v-text="b.text"></span>
                  <div class="relative">
                    <img
                      :src="b.imgurl"
                      width
                      height
                      class="lazy-img flex-child-noshrink"
                      loaded="true"
                    >
                    <div class="tops-mask"></div>
                  </div>
                </a>
              </transition-group>-->
              <!-- <li style="width: 414px; float: left; display: block;" class>
                <a class="slide-link" href="/products/lilili">
                  <img
                    width="100%"
                    src="//asset.ibanquan.com/asset/5bc962bd26a801265b000040/index_slide_3?v=1539924669"
                    alt="slide3"
                    draggable="false"
                  >
                </a>
              </li>

              <li
                style="width: 414px; float: left; display: block;"
                class="clone"
                aria-hidden="true"
              >
                <a class="slide-link" href="/products/coffeesquare">
                  <img
                    width="100%"
                    src="//asset.ibanquan.com/asset/5bc963ef53f4e32535000064/index_slide_1?v=1539924975"
                    alt="slide1"
                    draggable="false"
                  >
                </a>
              </li>-->
            </ul>
          </div>
          <ol class="flex-control-nav flex-control-paging">
            <li>
              <a :class="{'flex-active':page==0}">1</a>
            </li>
            <li>
              <a :class="{'flex-active':page==1}">2</a>
            </li>
           
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    autoplay() {
      if (this.page == this.banner.length) {
        this.page = 0;
      } else if (this.page < 0) {
        this.page = this.banner.length - 1;
      }
    },go() {
      this.timer = setInterval(() => {
        this.page++;
        this.autoplay();
      }, 2000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    touchstart(e) {
      this.stop();
      this.startPointX = e.changedTouches[0].pageX;
      this.box = document.querySelectorAll(".box");
      this.boxWidth = this.box[0].offsetWidth;
    },
    touchmove(e) {
      if (this.startPointX == this.changePointX) {
        return;
      }
      let currPointX = e.changedTouches[0].pageX;
      this.leftSlide = this.startPointX - currPointX;
    },
    async touchend() {
      this.go();
      if (this.leftSlide > this.boxWidth / 3) {
        this.transitionName = 'list';
        this.page++;
        this.autoplay();

      }else if(-this.leftSlide > this.boxWidth / 3){
        this.transitionName =await 'list2';
        this.page--;
        this.autoplay();
        this.transitionName =await 'list';
      }
    }
  },
  created() {
    this.timer = setInterval(() => {
      this.page++;
      this.autoplay();
    }, 2000);
  },

  name: "Cbanner",
  data() {
    return {
      transitionName:"list",
     page: 0,
      timer: "",
      startPointX: 0,
      changePointX: 0,
      leftSlide: 0,
      boxWidth: 0,
      box: null,
      banner: [
        {
          imgurl:
            "//asset.ibanquan.com/asset/5bc963ef53f4e32535000064/index_slide_1?v=1539924975"
        },
        {
          imgurl:
            "//asset.ibanquan.com/asset/5bc962bd26a801265b000040/index_slide_3?v=1539924669"
        },
        
        
      ]
    };
  }
};
</script>

<style>
.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
  
}.list2-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list2-leave-active {
  transition: all 1s ease;
  transform: translateX(110%);
}

.list2-enter {
  transform: translateX(-110%);
}

.list2-leave {
  transform: translateX(0);
}
</style>