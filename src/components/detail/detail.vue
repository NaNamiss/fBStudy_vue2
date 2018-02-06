<template>
    <transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
        <div class="detail" v-show='detailShow'>
          <span class="noticeClose" @click="hideDetail">X</span>
            <h1>公告</h1>
            <!-- <p class="bulletin">{{seller.bulletin}}</p> -->
            <h2>--优惠--</h2>
            <ul>
                <li v-for="(item,k) in seller.supports">
                    {{k+1}}.{{item.description}}
                </li>
            </ul>
        </div>
    </transition>
</template>

<script>
import { mapGetters } from "vuex";
import "animate.css/animate.css";

export default {
  computed: {
    ...mapGetters(["detailShow", "seller"])
  },
  methods: {
    hideDetail() {
      //   alert("已经触发点击事件")
      this.$store.dispatch("hideDetail");
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
  color: #fff;
  background-color: rgba(7, 17, 27, 0.6);
  padding-left: 10%;
  .noticeClose {
    position: absolute;
    display: block;
    background-color: #000;
    color: #fff;
    border-radius: 20px;
    padding: 3%;
    right: 13%;
    top: 2%;
  }
  h1 {
    margin-top: 25%;
    margin-left: 30%;
    margin-bottom: 10%;
    font-size: 24px;
    color: #fff;
  }
  h2 {
    color: #fba74f;
    margin-bottom: 10px;
  }
  .bulletin {
  }
  ul li {
    list-style-type: none;
    margin-bottom: 10px;
  }
}
</style>
