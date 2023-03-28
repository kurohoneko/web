// 在 index.js 中，导入几个模块，得到需要向外共享的方法

// 导入模块
const escape = require('./src/Zhuanyi')

// 向外暴露成员，用展开运算符，展开里面的属性
module.exports = {
    ...escape                 
    // 把这个对象的每一个属性都展开了，交module.exports 进行存储，向外暴露
}


