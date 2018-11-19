import Vue from 'vue'
import './cube-ui'
import App from './App.vue'

// css
import './assets/stylus/index.styl'

Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
