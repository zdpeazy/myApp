import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueAxios from 'axios'
import routerConfig from './router/routers'
/*import store from './vuex/store'*/


Vue.use(VueRouter)
Vue.prototype.$http = VueAxios


const router = new VueRouter({routes: routerConfig})


new Vue({
  el: '#app',
  router,
  /*store,*/
  render: h => h(App)
})