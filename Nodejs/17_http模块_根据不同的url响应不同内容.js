/* 
* 根据不同的 url 响应不同的 html 内容
* 
*/

const http = require('http')
const server = http.createServer()

// 监听web请求
server.on('request', (req, res) => {
    // 获取请求的 url 地址
    const url = req.url
    // 设置默认的响应内容为 404 Not Found
    let content = '<h1>404 Not Found. 页面不存在</h1>'
    // 判断用户请求的是 / 或 /index.html首页，还是 /about.html关于页面
    if(url === '/' || url === '/index.html'){
        content = '<h1>欢迎访问首页━(*｀∀´*)ノ亻! </h1>'
    } else if (url === '/about.html'){
        content = '<h1>关于页面</h1>'
    }

    // 设置响应头，编码格式，以防中文乱码
    res.setHeader('Content-Type','text/html; charset=utf-8')
    // 使用 res.end() 把内容响应给客户端
    res.end(content)
})

// 启动 web 实例服务器
server.listen(80, () => {
    console.log("服务器已启动... 端口为80 地址为http://127.0.0.1")
})