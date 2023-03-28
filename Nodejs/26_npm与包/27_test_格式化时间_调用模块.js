/*

// 导入自定义的 格式化时间 模块
const myTime = require('./27_npm_格式化时间_传统方法')

// 调用方法，进行时间格式化
const dt = new Date()
console.log(dt)                           // 2023-03-08T10:23:09.120Z    无格式化
console.log( myTime.myDateFormat(dt) )    // 2023-03-08 18:23:40         格式化后

*/
//——————————————————————————————————————————————————————————
// 在项目中安装包的命令
// npm install 包的完整名称
// npm i moment      下载了 moment 包，时间格式化用

// 导入 moment
const moment = require('moment')

const dt = moment().format('YYYY-MM-DD hh:mm:ss')
console.log(dt)



