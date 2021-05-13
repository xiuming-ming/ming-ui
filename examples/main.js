import Vue from 'vue'
import App from './App.vue'
import mingUI from '../packages/index.js'
Vue.use(mingUI)

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
