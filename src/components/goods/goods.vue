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
                    <ul>
                        <li v-for="item2 in item.foods">
                            <img :src="item2.image" alt="商品图片" class="foodimg">
                            {{item2.name}}
                        </li>
                    </ul>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    created(){
        this.$store.dispatch('getGoods')
    },
    computed:{
        ...mapGetters(['goods'])
    }
}
</script>

<style lang='less' scoped>
    .goods{
        display: flex;
        position: absolute;
        top: 174px;
        bottom: 46px;
        overflow: auto;
        .maen-wrapper{
            flex:0 0 80px;
            width: 80px;
            background-color: #ccc;
        }
        .foods-wrapper{
            flex: 1;
            .foodimg{
                width: 80px;
                height: 80px;
            }
        }
    }
    ul{
        list-style: none;
    }
</style>
