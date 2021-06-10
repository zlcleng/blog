/*
 * @Date: 2021-06-10 11:22:35
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-10 11:31:22
 * @FilePath: \vue_patient_follow\src\utils\validate.js
 */
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername (str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

// 计算表达式的值
function evil (fn) {
  var Fn = Function // 一个变量指向Function，防止有些前端编译工具报错
  return new Fn('return ' + fn)()
}
/**
 * @param {string, string, string} url
 * @returns {string}
 */
export function changeUrlArg (url, arg, val) {
  var pattern = url + '=([^&]*)'
  var replaceText = arg + '=' + val
  return url.match(pattern) ? url.replace(evil('/(' + arg + '=)([^&]*)/gi'), replaceText) : (url.match('[?]') ? url + '&' + replaceText : url + '?' + replaceText)
}
