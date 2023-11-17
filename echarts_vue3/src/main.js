import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入
import 'lib-flexible/flexible.js'

// 引用echarts(Vue2的写法，Vue3已经行不通)
// import * as echarts from "echarts"
// // eslint-disable-next-line
// Vue.prototype.$echarts = echarts;

createApp(App).use(store).use(router).mount('#app')
