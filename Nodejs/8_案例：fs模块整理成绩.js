/* 
* 注意：
* 需要提前准备好 8.txt 文件
* 内容：小木=99 柚子=100 小葵=90 小鹿=99 小濑=89
*
*/

// 1. 导入 fs 模块
const fs = require('fs')

// 2. 调用 fs.readFile() 读取文件
fs.readFile('8.txt','utf8', function(err,dataStr){
    if(err){
        return console.log('读取失败！'+ err)
    }
    console.log('读取成功！'+ dataStr)

    // 2.1 处理成绩 按照数组进行分割
    const arrNew = dataStr.split(' ')
    // 2.2 循环分割后的数组，替换等号=为冒号:
    const arrNew2 = []
    arrNew.forEach(item => {
        arrNew2.push(item.replace('=','：'))
    })
    // 2.3 把数组合并为字符串
    const newStr = arrNew2.join('\r\n')

    // 3. 调用 fs.writeFile() 修改文件
    fs.writeFile('8.txt',newStr,function(err){
        if(err){
            return console.log('写入失败！'+ err)
        }
        console.log('写入成功！')
    })

})


 
