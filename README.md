##介绍

该组件用于便捷地在Web端集成UE像素流送服务

[NPM私有库地址](http://192.168.1.106:4873/-/web/detail/@zkzc/pixel-streaming-layer)

##示例页面
以下页面引用了pixel-stream-layer,并指定streamUrl地址

https://lbs.iot-cas.com/lbs/static/demo/pixel-streaming-layer/index.html?streamurl=https://192.168.1.254

## 快速上手
### 安装依赖包
```shell
npm i @zkzc/pixel-streaming-layer --registry http://192.168.1.106:4873
```
### 全局注册
```vue
import { createApp } from 'vue'
const app = createApp(App)

// 注册组件
import PixelStreamLayer from '@zkzc/pixel-streaming-layer'
app.use(PixelStreamLayer)

// 引入样式
import '@zkzc/pixel-streaming-layer/lib/pixel-streaming-layer.css'
```
### 程序调用
```vue
<!--serverURL为服务流地址, isDebug=true时开启调试模式-->
<pixel-stream-layer :serverUrl="serverURL"  is-debug/>
```

## 子工程引用
```shell
git submodule add git@192.168.1.130:easyCode/gl-layers.git
```

## 常用指令
### 本地运行
```shell
npm install
npm run serve
```
### 构建工程
```shell
npm run build
```
### 构建NPM包
```shell
npm run build:component
```
### 发布包
// 1.修改package.js 版本号，如 0.1.x
// 2.发布指令
```shell
npm run release
```
# 开发指引
## 步骤1
在gitlab上创建分支，比如dev_userName，将分支代码clone到本地

## 步骤2
方法1：NPM全局引入,发布验证
```vue
import PixelStreamLayer from '../lib/pixel-streaming-layer.umd.js'
import '../lib/pixel-streaming-layer.css'
app.use(PixelStreamLayer)
```
方法2：工程内全局引入,方便调试
```vue
import PixelStreamLayer from './components/index'
app.use(PixelStreamLayer)
```

## 发布版本

[UE5.1 + Vue3像素流 保姆级教程](https://zhuanlan.zhihu.com/p/636721994)

[Vue3 + UE5.2 NPM包](https://zhuanlan.zhihu.com/p/635475997)
该方案无法修改ws地址,需要工程与信令服务同域

[从0开始开发Vue3组件库](https://juejin.cn/post/7009212518954434573)
