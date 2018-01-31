
import types from '../types'
import axios from 'axios'

// 定义一个变量，用来存储数据
const state = {
    seller: {},
    detailShow:false
}

// 获取数据
const getters = {
    seller(state){
        return state.seller
    },
    detailShow(state){
        return state.detailShow
    }
}

// 发起一个行为，(接口请求)
const actions = {
    getSeller({ commit, state }) {
        axios.get('/api/seller').then(resp => {
            // state.seller = resp.data.data;//数据不应该在这里改，需要提交
            if(resp.data.error == 0){
                commit(types.GET_SELLER,resp.data.data);   //提交一个处理数据的指示
            }
        })
    },
    showDetail({commit,state}){
        commit('abc')
    },
    hideDetail({commit,state}){
        commit(types.HIDE_DETAIL)
    }
}

// 处理数据
const mutations = {
    [types.GET_SELLER](state,data){
        state.seller = data;
    },
    abc(state){
        state.detailShow = true;
    },
    [types.HIDE_DETAIL](state){
        state.detailShow = false;
    }
}

// 导出
export default {
    state,
    getters,
    actions,
    mutations
}