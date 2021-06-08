/*
 * @Date: 2021-06-02 13:00:37
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-07 12:53:21
 * @FilePath: \vue-blog\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/data',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/data',
    name: 'Data',
    component: () => import('../views/data/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
