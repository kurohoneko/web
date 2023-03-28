/* 
* 注意：fs.writeFile() 方法只能创建文件，不能创建路径。也就是遇到不存在的文件夹就报错。
*                      新写入的内容会覆盖之前的内容。
*/


// 1. 导入 fs文件模块、path路径模块
const fs = require('fs')
const path = require('path')

// 1.1 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
// \s表示空白字符 \S表示非空字符 *表示可匹配任意次 [\s\S]就是任意字符
const regStyle = /<style>[\s\S]*<\/style>/              // 其中 \/ 是转义字符为 /
const regScript = /<script>[\s\S]*<\/script>/           

// 2. 读取被处理的 HTML 文件
fs.readFile(path.join(__dirname,'11_案例：提取css和js的代码块.html') , 'utf8', (err,dataStr) => {
    if(err) return console.log('读取失败！'+err.message)

    // 2.1 读取 HTML 文件成功后，调用对应的方法来处理，拆接出css js文件
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 3. 处理 CSS 样式 style标签
function resolveCSS(htmlStr){
    // 3.1 使用正则提取 <style></style> 标签 ，传给 htmlStyle
    const htmlStyle = regStyle.exec(htmlStr)        // 正则.exec返回数组
    // 3.2 删除开头和结尾的style标签
    const newCSS = htmlStyle[0].replace('<style>','').replace('</style>','')
    // 3.3 提取出来的css样式，写入到 11_index.css文件中
    fs.writeFile(path.join(__dirname,'11_index.css'), newCSS, err => {
        if(err) return console.log("css写入错误！"+ err.message)
        console.log("css写入成功！保存到文件夹："+ __dirname)
    })
}

// 4. 处理 js 脚本 script标签
function resolveJS(htmlStr){
    // 4.1 使用正则提取 <script></script> 标签 ，传给 htmlJs
    const htmlJs = regScript.exec(htmlStr)        // 正则.exec返回数组
    // 4.2 删除开头和结尾的script标签
    const newJs = htmlJs[0].replace('<script>','').replace('</script>','')
    // 4.3 提取出来的js，写入到 11_index.js文件中
    fs.writeFile(path.join(__dirname,'11_index.js'), newJs, err => {
        if(err) return console.log("js写入错误！"+ err.message)
        console.log("js写入成功！保存到文件夹："+ __dirname)
    })
}

// 5. 处理 html 文件
function resolveHTML(htmlStr){
    // 5.1 使用字符串的 replace 替换方法，把内嵌的<style>和<script>标签替换为外联的<link><script>标签
    //     正则表达式匹配的需要被替换的内容，这个正则匹配的就是<style></style>标签...
    const newHTML = htmlStr.replace(regScript,'<link href="11_index.css" rel="stylesheet"/>').replace(regStyle,'<script src="11_index.js"> </script>')

    // 5.2 替换完成之后的 html 的代码，写入到 11_index.html 里
    fs.writeFile(path.join(__dirname,'11_index.html'), newHTML, err => {
        if(err) return console.log("html写入失败！"+err.message)
        console.log("html文件写入成功！保存到文件夹："+__dirname)
    })
}