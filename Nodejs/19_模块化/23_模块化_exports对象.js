console.log(module.exports)             // {}
console.log(exports)                    // {}
console.log(module.exports === exports)    // true

const uName = '加菲猫'              // 定义模块私有成员 uName
module.exports.uName = uName            // 将 私有成员 共享出去
exports.uName2 = '欧迪'                 // 挂载新成员
exports.sayHi = function() {            // 挂载方法
    console.log('你好')
}
// 打印结果：{ uName: '加菲猫', uName2: '欧迪', sayHi: [Function (anonymous)] }

// 最终，向外界共享的结果，永远都 module.exports 所指向的对象