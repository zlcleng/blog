/*
 * @Date: 2021-06-02 13:00:37
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-10 13:05:40
 * @FilePath: \blog\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css/normalize.css'
import '@/styles/index.less'

import components from './plugins/element'
const app = createApp(App)

components.forEach((component: any) => {
  app.component(component.name, component)
})

app.use(store).use(router).mount('#app')
