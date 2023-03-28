// 在外界使用 require 导入一个自定义的模块，得到的成员，
// 就是该模块中通过 module.exports 指向的那个对象

// 使用require() 方法导入模块时，导入的结果，永远以 module.exports 指定的对象为准。

const n = require('./22_模块化_module.exports对象')
console.log(n)