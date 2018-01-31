<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to='/goods'>商品1</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/ratings'>评论2</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/seller'>商家3</router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import detail from './components/detail/detail.vue'

  export default {
    components: {
      'v-header': header,
      'v-detail': detail
    }
  }
</script>

<style lang='less' scoped>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    .tab-item {
      flex: 1;
      text-align: center;
      &>a {
        font-size: 14px;
        display: block;
        &.active {
          color: #ff7300;
        }
      }
    }
  }
</style>