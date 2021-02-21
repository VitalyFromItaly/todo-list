import Vue from 'vue'
import App from './App.vue'
import '../css/style.css'
import VueMeta from 'vue-meta'
Vue.config.productionTip = false
Vue.use(VueMeta)
new Vue({
  render: h => h(App),
}).$mount('#app')
