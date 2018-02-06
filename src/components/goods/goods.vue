<template>
    <div class="goods">
        <div class="maen-wrapper">
            <ul>
                <li v-for="item in goods">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="foods-wrapper">
            <ul>
                <li v-for="item in goods">
                    <dl v-for="item2 in item.foods">
                        <dt>
                            <img :src="item2.image" alt="商品图片" class="foodimg">
                        </dt>
                        <dd>
                            <span class="name">{{item2.name}}</span>
                            <span class="description">{{item2.description}}</span>
                            <span class="sellCount">月售{{item2.sellCount}}&nbsp;好评率{{item2.rating}}%</span>
                            <span class="price">￥{{item2.price}}</span>
                        </dd>
                    </dl>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  created() {
    this.$store.dispatch("getGoods");
  },
  computed: {
    ...mapGetters(["goods"])
  }
};
</script>

<style lang='less' scoped>
.goods {
  display: flex;
  position: absolute;
  top: 174px;
  bottom: 46px;
  overflow: auto;
  .maen-wrapper {
    flex: 0 0 25%;
    width: 25%;
    background-color: #f8f8f8;
    margin-right: 10px;
    ul li {
      height: 55px;
      line-height: 55px;
      padding-left: 10px;
      padding-right: 10px;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &.active {
        color: #ff7300;
        background-color: #fff;
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    overflow: auto;
    ul li {
      dl {
        padding-top: 10px;
        padding-bottom: 10px;
        clear: both;
        dt {
          float: left;
          margin-right: 10px;
          .foodimg {
            width: 80px;
            height: 80px;
            border-radius: 5px;
          }
        }
        dd {
          span {
            display: block;
            margin-top: 5px;
            &.name {
              font-weight:bold;
            }
            &.description,&.sellCount{
                color: #ccc;
                font-size: 12px;
            }
            &.price {
              color: red;
              font-size: 14px;
              font-weight: 700;
              vertical-align:bottom;
              padding-top: 5px;
            }
          }
        }
      }
    }
  }
}
ul {
  list-style: none;
}
</style>
