<template>
    <div id="header">
        <div class="header" @click="showDetail">
            <h2>{{seller.name}}</h2>
        </div>
        <v-detail></v-detail>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'   //{mapGetters}方法  获取数据
import detail from '../detail/detail.vue'

export default {
    created(){
        this.$store.dispatch('getSeller'); //发出getSeller请求
    },
    computed:mapGetters([
        'seller',
    ]),
    components:{
        'v-detail':detail
    },
    methods:{
        showDetail(){
            this.$store.dispatch('showDetail')  //发出一个动作
        }
    }
}
</script>

<style lang="less" scoped>
    .header{
        height: 134px;
        line-height: 134px;
        text-align:center;
        background-color: rgba(7,17,27,0.1);
        font-size: 14px;
        color:orange;
    }
</style>
