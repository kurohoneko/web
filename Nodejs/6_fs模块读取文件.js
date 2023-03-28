// 1. 导入 fs 模块，来操作文件
const fs = require('fs')

// 2. 调用 fs.readFile() 方法读取文件
//    参数1：文件路径
//    参数2：以什么编码格式读取
//    参数3：回调函数

/* fs.readFile('1.txt','utf8', function(err,dataStr){
    // 如果读取成功，则 err 的值为 null 
    // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
    console.log(err)
    console.log(dataStr)
}) */

// 判断文件是否读取成功
fs.readFile('1111.txt','utf8',function(err,dataStr){
    // 如果成功则err为null，否则为错误对象。
    // 成功了就不执行if里面的了，失败了err为真对到return返回结果并结束执行
    if(err){
        return console.log('文件读取失败！'+ err.message)
    }
    console.log('读取成功！'+ dataStr)
})