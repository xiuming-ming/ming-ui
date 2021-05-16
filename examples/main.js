import Vue from 'vue'
import App from './App.vue'
import mingUI from '../packages/index.js'
import Message from '../packages/components/message/index.js'
Vue.use(mingUI)
Vue.prototype.$Message = Message

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) }
}).$mount('#app')
