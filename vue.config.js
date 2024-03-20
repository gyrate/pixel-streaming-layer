const { defineConfig } = require('@vue/cli-service')

const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/lbs/static/demo/pixel-streaming-layer/' : './',
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  devServer: {
    https: true
  }
})
