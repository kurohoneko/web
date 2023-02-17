// 这里主要学前端 这个express可以不懂 就把他当成接收返回数据的后端服务器就行了

// 1. 引入 express
const { response, request } = require('express');
const express = require('express');

// 2. 创建应用对象
const app = express();


// 3. 创建路由规则
// request 是对请求报文的封装
// response 是对相应报文的封装
// /server 是如果客户端浏览器向服务端请求时，如果url的路径 请求行的第二段内容 的路径是/server的话
//         就会执行回调函数里面的代码，并且由response做出响应
app.get('/server', (request, response) => {
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO 你好 AJAX');
});

// 3.2 创建路由规则 POST
app.post('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX 你好 post');
});

// 3.3 创建路由规则 all
app.all('/server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头 所有类型的头信息都可以接收
    response.setHeader('Access-Control-Allow-Headers','*');
    //设置响应体
    response.send('HELLO AJAX 你好 all');
});

// 3.4 创建路由规则 json-server
app.all('/json-server', (request, response) => {
    //设置响应头
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应头 所有类型的头信息都可以接收
    response.setHeader('Access-Control-Allow-Headers','*');
    
    //响应一个数据
    const data = {
        name: 'hhhhhhhhhh'
    };
    //对对象格式data进行转换为字符串
    let str = JSON.stringify(data);

    //设置响应体
    //response.send('HELLO AJAX 你好 json-server');
    response.send(str);
});

// 3.5 延时响应
app.get('/delay', (request,response) => {
    //设置响应头 允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //响应数据
    setTimeout(() => {
        response.send("延时响应"); 
    }, 3000);
});

// jQuery发送AJAX请求
app.all('/jquery-server', (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    //response.send("Hello jQuery AJAX");
    const data = {name:'啊啊啊啊'};
    setTimeout(() => {
         response.send(JSON.stringify(data));
    }, 3000);
    //response.send(JSON.stringify(data));
});

// Axios发送AJAX请求
app.all('/axios-server', (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send("Hello AJAX Axios");
});

// fetch() 发送AJAX请求
app.all('/fetch-server', (request,response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.send("Hello AJAX fetch()");
});

// jsonp 服务
app.all('/jsonp-server', (request,response) => {
    //response.send('hello jsonp-server'); // 返回非 js代码，script标签就无法解析
    //response.send(' console.log("helo jsonp-server"); ');

    //1.数据
    const data = {
        name: '玻璃柠檬'
    };
    //将数据转化为 字符串
    let str = JSON.stringify(data);
    //返回结果  *end()不会返回特殊响应头  `&{}`模板字符串
    response.end(`My_name_is(${str})`)
});

// (8).jsonp 服务 检测用户名字是否存在
app.all('/jsonp-check-username', (request,response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在，请换一个别的名字'
    };
    let str = JSON.stringify(data);            //转换字符串
    response.end(`Check_username( ${str} )`);  //返回 js代码 Check(str); 
});

// (9).jQuery发送jsonp请求
app.all('/jquery-jsonp-server',(request,response) => {
    const data = {
        name: '语言等级考场',
        city: ['北京','大连','沈阳']
    };
    let str = JSON.stringify(data);
    //接收 callback 参数
    //请求url参数中的callback参数的值 赋值给 cb，callback的值是随机的，如jQuery363008071787967251609_1676631158208。
    //callback的值也就是回调函数的名字，不过这个值就是jQuery随机生成的。

    let cb = request.query.callback;
    //返回结果
    //resp...end(`getMax( ${str} )`);
    response.end(`${cb}( ${str} )`);
    //response.end(`${cb}( )`);
});

// (10).设置CORS响应头实现跨域
app.all('/cors-server',(request,response) => {
    response.setHeader("Access-Control-Allow-Origin","*"); //允许跨域
    response.setHeader("Access-Control-Allow-Origin","http://127.0.0.1:6666"); //只允许这个网页才可以向服务端发送请求。
    response.setHeader("Access-Control-Allow-Headers","*"); //允许头信息自定义
    response.setHeader("Access-Control-Allow-Method","*");  //请求方法随意
    response.send("hello cors");
});



// 4. 监听端口启动服务
app.listen(8000, ()=>{
    console.log("服务已经启动，8000 端口正在监听中...");
});