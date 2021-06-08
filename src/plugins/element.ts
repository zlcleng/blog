/*
 * @Date: 2021-06-07 13:03:17
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-08 13:42:47
 * @FilePath: \blog\src\plugins\element.ts
 */
import { createApp } from 'vue'
import App from '../App.vue'
import 'element-plus/lib/theme-chalk/index.css'

import {
  ElRow, 
  ElCol
} from 'element-plus'

const components = [
  ElRow,
  ElCol
]

const app = createApp(App)

components.forEach(component => {
  app.use(component)
})
