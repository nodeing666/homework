//首先定义一个jsonServer，引入我们的json-server模块
const JsonServer = require('json-server');
//然后将我们的数据也引入进来
const data = require('./db.js');


//接着实例化一个server服务器，可以通过jsonServer身上的create方法
const server = JsonServer.create();

//然后再创建一个router中间件，根据我们自己的数据去创建
const router = JsonServer.router(data);

//再创建一个middleware中间件，我们使用默认的，中间件其实相当于过滤器，表示程序运行到这一步时，添加上一些功能，中间件本质就是一个函数
const middleware = JsonServer.defaults();

//接下来去使用我们刚刚创建出来的这些中间件
server.use(middleware);
server.use(router);
//还有一个是我们请求体解析的时候需要用到的中间件
server.use(JsonServer.bodyParser);        // 单词：parser    分析程序

//实例好我们的服务，配置好我们需要的中间件之后呢，我们启动我们的服务
server.listen({
    //本地ip，与localhost映射
    host:'127.0.0.1',
    //端口号
    port:'8859'
},function () {      //它还有一个回调函数
    //成功之后，我们可以打印一些提示信息
    console.log('json-sever is running ~')
});
