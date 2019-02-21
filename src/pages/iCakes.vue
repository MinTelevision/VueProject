<template>
  <div id="app" class="page settings-body_background yhsd_free_scope">
    <Ctop/>
    <Cbanner/>
    <Cpictureshow/>
    <Cneirong/>
    <Cbird/>
  </div>
</template>

<script>
import Ctop from "../components/Ctop.vue";
import Cbanner from "../components/Cbanner.vue";
import Cpictureshow from "../components/Cpictureshow.vue";
import Cneirong from "../components/Cneirong.vue";
import Cbird from "../components/Cbird.vue";

export default {
  name: "iCakes",
  components: {
    Ctop,
    Cbanner,
    Cpictureshow,
    Cneirong,
    Cbird
  }
};
</script>

<style >
.owl-wrapper {
  white-space: nowrap;
  height: 163px;
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
}
.owl-item{
  display: inline-block;
}
::-webkit-scrollbar{
    display: none;
}

</style>
