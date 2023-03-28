// 在一个自定义模块中，默认情况下，module.exports = {} 空对象。

// 向 module.exports 对象上挂载 userName 属性
module.exports.userName = '黑猫'

// 向 module.exports 对象上挂载 sayHi 方法
module.exports.sayHi = function() {
    console.log("你好！"+ userName)
}
// 把私有成员通过module.exports暴露出去，让外界访问
const age = 20
module.exports.age = age

// 让 module.exports 指向一个全新的对象
module.exports = {
    uName: '加菲猫',
    sayHi: function() {
        console.log('Hi ,')
    }
}