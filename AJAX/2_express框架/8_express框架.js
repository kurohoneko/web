// 这里主要学前端 这个express可以不懂 就把他当成接收返回数据的后端服务器就行了


// 1. 引入 express
const { response } = require('express');
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对相应报文的封装
app.get('/', (request, response) => {
    //设置响应
    response.send('HELLO 你好 Express！');
    
});

// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000 端口正在监听中...");
} )