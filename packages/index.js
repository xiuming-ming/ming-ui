const requireComponent = require.context('./components', true, /\.vue$/)

const install = (Vue) => {
  if (install.installed) return
  requireComponent.keys().forEach(fileName => {
    const config = requireComponent(fileName)
    const componentName = config.default.name
    Vue.component(componentName, config.default || config)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
