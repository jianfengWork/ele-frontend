import Vue from 'vue'
import './cube-ui'
import './mount'
import App from './App.vue'

// css
import './assets/stylus/index.styl'

Vue.config.productionTip = true

new Vue({
  render: h => h(App)
}).$mount('#app')
