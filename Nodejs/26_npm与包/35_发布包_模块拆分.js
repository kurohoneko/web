// 测试用



// 导入模块         
// 只需要写文件夹就行，无需写具体 js 文件，因为 package.json 的 main 属性指定了 入口文件./index.js
const nnn = require('./35_发布包_模块拆分')

// 调用模块里的方法
console.log( nnn.chuli('<>>') )