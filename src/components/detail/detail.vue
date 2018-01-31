<template>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
        <div class="detail" v-show='detailShow'>
            <h3>详情页</h3>
            <button @click="hideDetail">关闭{{detailShow}}</button>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";
import "animate.css/animate.css";

export default {
  computed: {
    ...mapGetters(["detailShow"])
  },
  methods:{
      hideDetail(){
        //   alert("已经触发点击事件")
          this.$store.dispatch('hideDetail')
      }
  }
};
</script>

<style lang='less' scoped>
.detail {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background-color: rgba(7, 17, 27, 0.4);
  
}
</style>
