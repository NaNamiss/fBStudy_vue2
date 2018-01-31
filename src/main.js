import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import router from './router/index.js'

Vue.config.productionTip = false;   //阻止 vue 在启动时生成生产提示

/* eslint-disable no-new */
new Vue({
  store,
  router,
  el: '#app',
  template:'<app/>',
  components:{App},
  data :{

  },
  methods:{
    
  }
})
