// 1. 导入 fs 文件系统模块
const fs = require('fs')

// 2. 调用 fs.writeFile() 方法，写入文件的内容
/*  
    参数1：必选，文件存放的路径。
    参数2：必选，要写入的内容。
    参数3：可选，以什么格式写入文件内容，默认是utf8
    参数4：必选，完成后的回调函数
*/
/* fs.writeFile('2.txt','abcd', function(err){
    // 成功err为null，否则为错误对象
    console.log(err)
}) */

// 判断是否成功    成功时err为null假，也就不执行if里的
fs.writeFile('GG:\2.txt','abcd', function(err){
    if(err){
        return console.log('写入失败！'+err)
    }
    console.log('写入成功！')
})