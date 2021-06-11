/*
 * @Date: 2021-06-02 13:00:37
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-11 13:07:50
 * @FilePath: \blog\src\store\index.ts
 */
import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'

export default createStore({
  modules: {
    app,
    settings
  },
  getters
})
