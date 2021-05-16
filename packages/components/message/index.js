import Vue from 'vue'
import message from './message.vue'

const MessageConstructor = Vue.extend(message)
let instance

const Message = function (options = {}) {
  instance = new MessageConstructor({
    data: options
  })
  document.body.appendChild(instance.$mount().$el) // 挂载到 body 下
};

['success', 'warning', 'info', 'error'].forEach(type => {
  Message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Message(options)
  }
})

export default Message
