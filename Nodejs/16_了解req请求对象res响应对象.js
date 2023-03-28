// 导入 http 模块
const http = require('http')
// 创建服务器
const server = http.createServer()

// 绑定 request 事件监听
server.on('request', (req, res) => {
    //【req 请求对象】客户端相关的数据或属性
    // req.url 是客户端请求的 URL 地址
    const url = req.url
    // req.method 是客户端请求的 method 类型。如post get
    const method = req.method
    // 打印出req.url 和 req.method。其中req.url是从请求地址的端口号/后面开始的
    const str = `your request URL is ${url}, and request method is ${method}`
    console.log(str)

    //【res 响应对象】与服务器相关的数据和属性
    // res.end() 方法的作用：向客户端响应一些内容
    // 向客户端发送指定的内容，并结束这次请求的处理过程。
    res.end(str)
})

// 启动服务器，设置端口号为 80，回调函数处理内容
server.listen(80, () => {
    console.log('服务器已启动... http://127.0.0.1')
})