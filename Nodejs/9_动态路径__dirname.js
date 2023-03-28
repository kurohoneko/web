console.log(__dirname)

// 读取
const fs = require('fs')
//           __dirname 表示当前文件所处的目录
fs.readFile( __dirname + '/1.txt', 'utf8', function(err,dataStr){
    if(err){
        console.log("读取失败！")
    }
    console.log("读取成功！" + dataStr)
})