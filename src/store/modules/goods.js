
import types from '../types'
import axios from 'axios'

const state = {
    goods :[]
}

const getters = {
    goods(state){
        return state.goods
    }
}

const actions = {
    getGoods({commit,state}){
        axios.get('/api/goods').then(resp=>{
            if(resp.data.error == '0'){
                commit('getGoods',resp.data.data)
            }
        });
    }
}

const mutations = {
    getGoods(state,data){
        state.goods = data;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}