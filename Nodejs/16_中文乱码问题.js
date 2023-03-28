const http = require('http')
const server = http.createServer()

server.on('request', (req, res) => {
    const str = `您请求的 url 地址是${req.url}，请求的 method 类型是${req.method}`

    // 为了防止中文显示乱码，需设置响应头 Countent-Typr 的值为 text/html; charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    res.end(str)
})

server.listen(80, () => {
    console.log("服务器已启动...地址为：http://127.0.0.1")
})