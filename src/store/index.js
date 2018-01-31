
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import actions from './actions'
import goods from './modules/goods'
import ratings from './modules/ratings'
import sellers from './modules/sellers'
// import mutations from './mutations'   //并没有导入这个模块

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    actions,
    modules:{
        goods,
        ratings,
        sellers
    }
})

