import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/index'
import FastClick from 'fastclick'

// 由于lazyload是vue的指令，需安装
import { Lazyload } from 'vant';
Vue.use(Lazyload)

// 解决移动端三百秒延迟
FastClick.attach(document.body);

Vue.prototype.$bus = new Vue()
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
