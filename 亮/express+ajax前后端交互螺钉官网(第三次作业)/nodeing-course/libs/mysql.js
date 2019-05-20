//用来链接数据库


//引入数据库
var mysql = require('mysql');

//读取数据库的配置文件
var config = require('config-lite')(__dirname);

//连接数据库
var pool = mysql.createPool(config.mysql);

//导出连接的数据库
module.exports = pool;