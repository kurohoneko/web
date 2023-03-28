/* 
* 案例：
* 现有文件夹为'18'。
* 文件夹里面有 index.html 、 index.css、 index.js 文件，
* 在浏览器输入index.html打开网页，请求css js文件资源。
* 服务器充当的角色就是：字符串的搬运工。
* 把文件的实际存放路径作为每个资源的请求 url 地址，也可以把 url 地址当作文件的路径。
*/

// 1. 导入模块
const http = require('http')
const path = require('path')
const fs = require('fs')

// 2. 创建 web 服务器
const server = http.createServer()

// 3. request 监听请求，将资源的请求 url 地址映射为文件的存放路径
server.on('request', (req, res) => {
    // 3.1 获取到客户端请求的 url 地址
    const url = req.url
    // 3.2 把请求的 url 地址，映射为 本地文件的存放路径
    //const fPath = path.join(__dirname, url)

    /* 5. 优化步骤3.2 
    *  用户每次输入127.0.0.1/18/index.html 打开首页，很麻烦
    *  如果把后面的给自动补全就很方便，判断输入127.0.0.1/就进入首页，也就是请求地址是 / 的。
    *  127.0.0.1/ 与 127.0.0.1一样，请求地址都是 / 。判断符合就给path路径补加上首页地址
    *  如果不是 / ，比如是index.html，也给它补全首页路径。
    *  这样就不用输入那个文件夹了，html引用的外部资源正常请求，无干扰。
    */
    // 5.1 预定义空白的文件存放路径
    let fPath = ''
    if (url === '/') {
        // 5.2 如果请求路径为 / 根路径  则手动指定文件的存放路径
        fPath = path.join(__dirname, '/18/index.html')
    } else {
        // 5.3 如果请求路径不为 / 根路径 则加一个/18补全完整的路径
        fPath = path.join(__dirname, '/18',url)
    }

    // 4.1 根据映射过来的文件路径读取文件
    fs.readFile(fPath,  (err, dataStr) => {
        // 4.2 读取失败，向客户端响应错误消息
        if(err) return res.end('404 Not Found') + console.log(err.message)

        // 4.3 读取成功，将 "读取成功的内容" 响应给客户端
        console.log("文件读取成功！正在处理...")
        res.end(dataStr)
    })
})

// 启动服务器
server.listen(80, () => {
    console.log("服务器已启动...地址：http:/127.0.0.1:80")
})