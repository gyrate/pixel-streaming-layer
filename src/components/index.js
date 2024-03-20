import PixelStreamLayer from './pixel-stream-layer/index.vue'

const components = {
  PixelStreamLayer
}

function install (Vue) {
  const keys = Object.keys(components)
  keys.forEach((name) => {
    const component = components[name]
    Vue.component(component.name || name, component)
  })
}

export default {
  install,
  ...components
}
