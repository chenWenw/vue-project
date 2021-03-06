// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入main-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//引入mui
import './assets/mui/css/mui.min.css'
Vue.config.productionTip = false
//导入mui购物车的样式
import './assets/mui/css/icons-extra.css'


//导入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
