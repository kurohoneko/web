const express = require('express');

const app = express();

app.get('/home', (request,response) => {
    //响应一个页面
    response.sendFile(__dirname + '/index.html');
    //相当于 127.0.0.1:9000 这个本地文件所属目录
    // __dirname ：用来动态获取当前文件模块所属目录的绝对路径
    // __filename：用来动态获取当前文件的绝对路径
});

app.get('/data', (request,response) => {
    //响应用户数据
    response.send("这个是用户数据");
});

app.listen(9000, () => {
    console.log("服务已启动...9000");
})