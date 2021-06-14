/*
 * @Date: 2021-06-11 13:02:45
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-11 13:16:45
 * @FilePath: \blog\src\store\modules\settings.ts
 */

const state = {
  showSettings: null,
  fixedHeader: false,
  sidebarLogo: true
}

const mutations = {
  // CHANGE_SETTING: (state, { key, value }) => {
  //   // eslint-disable-next-line no-prototype-builtins
  //   if (state.hasOwnProperty(key)) {
  //     state[key] = value
  //   }
  // }
}

const actions = {
  // changeSetting ({ commit }, data) {
  //   commit('CHANGE_SETTING', data)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

