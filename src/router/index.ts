/*
 * @Date: 2021-06-02 13:00:37
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-10 13:23:33
 * @FilePath: \blog\src\router\index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: Layout,
    children: [{
      path: '/home',
      name: 'Home',
      component: () => import('../views/home/index.vue')
    }]
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
