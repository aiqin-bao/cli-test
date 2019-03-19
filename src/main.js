import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";
import './styles/index.scss'
import router from '@/router/index'
import store from "./vuex/index"


Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
