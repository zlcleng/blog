/*
 * @Date: 2021-06-02 13:00:37
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-08 13:44:12
 * @FilePath: \blog\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element.ts'
// import 'element-plus/lib/theme-chalk/index.css'

// import {
//   ElRow,
//   ElCol
// } from 'element-plus'

// const components = [
//   ElRow,
//   ElCol
// ]

const app = createApp(App)

// components.forEach(component => {
//   app.use(component)
// })

app.use(store).use(router).mount('#app')
