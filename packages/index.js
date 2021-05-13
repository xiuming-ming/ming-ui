import Button from './components/button'

const install = function (Vue) {
  // 注册组件
  Vue.component(Button.name, Button)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
