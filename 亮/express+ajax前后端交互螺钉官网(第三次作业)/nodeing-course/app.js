var express = require('express');
var app = express();

//引入config-lite。用来读取不同的文件。
var config = require('config-lite')(__dirname);

var package = require('./package.json');

//引入路径相关的模块path。
var path = require('path');

//引用后台模块
var admin = require('./router/admin/index');

//引入前台模块
var home = require('./router/home/index');

//引入js模版引擎
var ejs = require('ejs');

//设置ejs模版的位置
app.set('engine views',path.resolve('views'));

// ejs设置html后缀
app.engine('html',ejs.__express);

//设置模版引擎
app.set('view engine','html');


//引入post方式发送过来接收数据的插件的数据(body-parser)
var bodyParser = require('body-parser');

//使用body-parser插件
app.use(bodyParser.urlencoded({extended: false}));



//使用加载静态文件的中间件(static)：静态文件路径设置在当前目录下的public里
app.use(express.static(path.resolve('./public')));

//使用后台模块路由
app.use('/admin',admin);

//使用前台模块
app.use('/',home);

app.get('/',function (req,res) {
    res.send("欢迎来到首页");
});

app.listen(config.port, function () {
    console.log(`${package.name} on ${config.port}`);
})