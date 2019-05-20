//这是前端用来处理数据的文件，所有关前端数据处理的操作我们都放到这个文件，

var pool = require('../libs/mysql.js');

var homeSqlMap = require('../libs/homeSqlMap.js');

var homeMode = {
    //接收后台发的数据，操作数据库。需要连接数据库
    getLogin: function (data, callback) {
        //操作数据库
        pool.query(homeSqlMap.getlogin, [data.username, data.password], function (error,result) {
            if (error) throw error;
        
            callback && callback(result[0])
           
        });
    },

    //使用数据库 查找邮箱是否存在
    findOne: function (data, callback) {
        //操作数据库
        pool.query(homeSqlMap.getByEmail, data.email, function (error,result) {
            //将我前台请求过来的email的数据跟我数据库的email做个对比,error表示报错，result
            //表示返回的结果
            //'select * from user where email=?'：这里的email=? 中的?表示占符，第二个参数中的email表示占位符的值

            //如果有错，抛出错误
            if (error) throw error;
        
            callback && callback(result[0])
            // console.log(result[0])
        });
    },

    //注册
    addOne: function (data, callback) {
        pool.query(homeSqlMap.add,[data.email, data.email, data.password, data.time],function (error,result) {
            if (error) throw error;
        
            callback && callback(result)
           
        });
    },

    //前端导航渲染
    findNav: function (data, callback) {
        pool.query(homeSqlMap.navFind, function (error, result) {
            if (error) throw error;
        
            callback && callback(result)
           
        })
    },
    
    //查找所有课程分类
    findCategory: function (data, callback) {
        pool.query(homeSqlMap.findClass, function (error, result) {
            if (error) throw error;
        
            callback && callback(result)
        });
    },

    //从后台拿到链接
    findLink: function (data, callback) {
        pool.query(homeSqlMap.linkFind, function (error, result) {
            if (error) throw error;
        
            callback && callback(result)
        })
    },

    findSystem: function (data, callback) {
        pool.query(homeSqlMap.systemFind, function (error, result) {
            if (error) throw error;
        
            callback && callback(result[0])
        })
    },

    //从后台拿到课程信息
    findCourse: function (data, callback) {
        pool.query(homeSqlMap.courseFind, data.name ,function (error, result) {
            if (error) throw error
            callback && callback(result[0]);
            // console.log(result[0]) 
        })
        // console.log(data.name)
    }
};

module.exports = homeMode;