<template>
  <pixel-stream-layer
    ref="pslayer"
    :server-url="serverURL"
    is-debug
  />

  <div class="test">
    <span>港科大体育馆操作 </span>
    <select
      v-model="currSpot"
      @change="setViewSpot(currSpot)"
    >
      <option
        v-for="(item,index) in spotList"
        :key="index"
        :value="item.value"
      >
        {{ item.name }}{{ item.hotkey ? '(' + item.hotkey + ')' : '' }}
      </option>
    </select>
    <button @click="resizeView">调整画面满屏</button>
    <button @click="startWander">开始自动巡航</button>
    <button @click="endWander">停止自动巡航</button>
    <button @click="play">播放</button>
    <button @click="close">停止</button>
  </div>
</template>

<script>

// 组件内引用
// import {getCurrentInstance} from 'vue'
// import PixelStreamLayer from '../lib/pixel-streaming-layer.umd.js'

export default {
  name: 'App',
  components: {
    // PixelStreamLayer
  },
  setup () {
    // 组件内引用
    // getCurrentInstance().appContext.app.use(PixelStreamLayer)
    return {}
  },
  data () {
    return {
      spotList: [
        { name: '初始点', value: 'start', hotkey: 'I' },
        { name: '大堂  ', value: 'Hall', hotkey: 'H' },
        { name: '篮球场', value: 'basketball', hotkey: 'B' },
        { name: '足球场', value: 'football', hotkey: 'F' },
        { name: '羽毛球馆', value: 'badmiton', hotkey: '' },
        { name: '乒乓球馆', value: 'pingpong', hotkey: '' },
        { name: '游泳馆', value: 'swimming', hotkey: '' },
        { name: '舞蹈室', value: 'dancing', hotkey: '' },
        { name: '网球场', value: 'tennis', hotkey: '' }
      ],
      currSpot: 'start'
    }
  },
  computed: {
    serverURL () {
      const urlParams = new URLSearchParams(window.location.search)
      const streamURL = urlParams.get('streamurl') || 'https://192.168.1.254'
      return streamURL
    }
  },
  methods: {
    /**
     * 填满画面
     */
    resizeView () {
      this.$refs.pslayer.fillView()
    },
    /**
     * 通过位置名称，设置镜头状态
     * @public
     * @param name {String} 位置名称
     */
    setViewSpot (name) {
      const command = ` setViewSpot ${name}`
      console.log(command)
      this.$refs.pslayer.emitMessageToUE(command)
    },

    /**
     * 开启自动巡航
     * @public
     */
    startWander () {
      this.$refs.pslayer.emitMessageToUE('startWander')
    },

    /**
     * 关闭自动巡航
     * @public
     */
    endWander () {
      this.$refs.pslayer.emitMessageToUE('endWander')
    },

    play () {
      this.$refs.pslayer.play()
    },

    close () {
      this.$refs.pslayer.stop()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.test {
  position: absolute;
  top:1em;
  left: 1em;
  color: #fff;

  button{
    margin: 0 0.2em;
  }
}
</style>
