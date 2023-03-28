// 1. 导入http模块
const http = require('http')

// 2. 创建web实例
const my_server = http.createServer()

// 3. 为web实例绑定 request 事件，来监听客户端发来的请求
// 使用.on()方法为服务器绑定 request事件
my_server.on('request', (req, res) => {
    // 只要有客户端来请求，就会触发 request事件，从而调用这个事件处理函数
    console.log('已监听到新的请求')
})

// 4. 启动服务器 .listen()
// 调用 my_server.listen(端口号, cb回调) 方法启动web服务器
// 启动期间，需要指定端口号和对应的回调函数
my_server.listen(80, () => {
    console.log("http server running at http:127.0.0.1 服务器已启动...")
})

