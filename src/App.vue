<template>
  <div id="app" style="padding-top:0;" class="page settings-body_background yhsd_free_scope">
    <router-view></router-view>
    <Cfoot/>
  </div>
</template>

<script>
import Cfoot from "./components/Cfoot.vue";
import "./assets/css/lore.css";
import "./assets/css/shenme.css";
import Vue from 'vue';
import Mint from 'mint-ui';
Vue.use(Mint);
export default {
  name: "app",
  components: {
    Cfoot, 
  }
};
</script>

<style>

</style>
