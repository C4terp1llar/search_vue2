import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from "@/plugins/vuetify";
import './assets/assets.scss'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
