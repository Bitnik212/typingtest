import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

import router from './routes/router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
