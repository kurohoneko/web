// require() 一个模块时，得到的永远是 module.exports 指向的对象。
// exports 永远以 module.exports 为准。
/* 
exports.userName = '加菲猫'
module.exports = {
    like: '千层面'
}
 */
// 最终结果：{ like: '千层面' }

// 首先，exports 对象指向了 userName = '加菲猫'
// 然后，module.exports 指向了新对象 like: '千层面'
// 因为 exports 永远是 module.exports 指向的对象，以它为准，所以，结果为 { like: '千层面' }
//————————————————————————————————————————————————————
/* 
module.exports.userName2 = '加菲猫'
exports = {
    like2: '披萨'
}
 */
// 最终结果：{ userName2: '加菲猫' }

// 更改了 exports 的指向，但不会影响到 module.exports 的指向。
// 所以，exports 永远以 module.exports 为准。
//————————————————————————————————————————————————————
/* 
exports.uname = '黑猫'
module.exports.like = '烤鱼'
 */
// 最终结果：{ uname: '黑猫', like: '烤鱼' }

// 没有开辟新对象，就是没有创建新对象，只是在同一个对象中添加属性，挂载一些属性
//————————————————————————————————————————————————————
exports = {
    username: '咖啡猫'
}
module.exports = exports
module.exports.age = '3'

// 最终结果：{ username: '咖啡猫', age: '3' }

// exports 指向一个对象，然后赋值给 module.exports，此时，module.exports 也指向了这个对象。
// 它俩指向同一个对象，然后再添加新属性。
// 浅拷贝，把 对象 的地址传给 exports，然后又传给了 module.exports。