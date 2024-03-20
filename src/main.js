import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/common.css'

const app = createApp(App)

// 方法1：NPM全局引入,发布验证
// import PixelStreamLayer from '../lib/pixel-streaming-layer.umd.js'
// import '../lib/pixel-streaming-layer.css'

// 方法2：工程内全局引入,方便调试
import PixelStreamLayer from './components/index'

app.use(PixelStreamLayer)
app.mount('#app')
