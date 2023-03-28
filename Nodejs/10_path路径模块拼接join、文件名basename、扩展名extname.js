const path = require('path')
const fs = require('fs')

// 注意：      ../ 会抵消前面的路径，抵消一级，../../就抵消两级
const pathStr = path.join('/a','/b','/c','../','/d')
console.log(pathStr)    // \a\b\d

// 拼接路径建议用 path.join() ，而 + 容错率较低
// 使用 + 拼接路径，结果拼接成了'E:\Code\A2\1st\Node.js.\1.txt'
/* fs.readFile(__dirname + './1.txt', 'utf8', function(err,dataStr){
    if(err){
        return console.log("读取失败！" + err)
    }
}) */
// 使用path.join()拼接路径，它会把 ./ 给处理掉，不会造成错误的拼接
fs.readFile(path.join(__dirname, './1.txt'), 'utf8', function(err,dataStr){
    if(err){
        return console.log("读取失败！" + err)
    }
    console.log("读取成功！" + dataStr)
})


//=======================================================
// path.basename(path [,ext])       //获取路径中的文件名，path为路径，ext为文件扩展名 用来移除后缀名

const fpath = 'a/b/1.txt'

//文件 1.txt 移除文件扩展名.txt  变成了 1
const newFilePath = path.basename(fpath, '.txt')        
console.log(newFilePath)    //返回了  1

//=======================================================
// path.ectname(path])       //path为路径字符串，返回文件扩展名字符串
const fpath2 = 'a/b/music.mp3'
const newfpath2 = path.extname(fpath2)
console.log(newfpath2)      //返回了  .mp3