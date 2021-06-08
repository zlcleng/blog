/*
 * @Date: 2021-06-07 13:01:53
 * @LastEditors: zlc
 * @LastEditTime: 2021-06-07 13:02:12
 * @FilePath: \vue-blog\babel.config.js
 */
module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        }
      }
    ]
  ]
}
