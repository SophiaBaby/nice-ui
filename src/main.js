import Vue from 'vue'
import App from './App.vue'
// import niceUI from ‘./components’


// Vue.use(niceUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
