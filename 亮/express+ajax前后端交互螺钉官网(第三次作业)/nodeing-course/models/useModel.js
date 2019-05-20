//model层是专门用来处理数据的，所有关于用户模块数据处理的操作我们都放到这个文件，


//导入连接的数据库
var pool = require('../libs/mysql.js');

//引入定义sql语句的文件
var userSqlMap = require('../libs/userSqlMap.js');

var userModel = {

    //使用数据库 查找邮箱是否存在
    findOne: function (data, callback) {
        //操作数据库
        pool.query(userSqlMap.getByEmail, data.email, function (error,result) {
            //将我前台请求过来的email的数据跟我数据库的email做个对比,error表示报错，result
            //表示返回的结果
            //'select * from user where email=?'：这里的email=? 中的?表示占符，第二个参数中的email表示占位符的值

            //如果有错，抛出错误
            if (error) throw error;
        
            callback && callback(result[0])
            // console.log(result[0])
        });
    },

    //用戶列表渲染
    findUser: function (data,callback) {
        pool.query(userSqlMap.getUser, function (error, result) {
            if (error) throw error;
        
            callback && callback(result)
        })
    },
    
    //删除用户模块
    deleteUser: function (data, callback) {
        
        pool.query(userSqlMap.delete,data.id, function (error, result) {
            if (error) throw error;
            callback && callback(result)
        });
    },
    
    //编辑用户模块
    getId: function (data, callback) {
        
        pool.query(userSqlMap.getUserId, data.id,function (error, result) {
            if (error) throw error;

            callback && callback(result[0]);
            // console.log(result[0])

        });
        // console.log(data)
    },

    // 用户添加逻辑
    addUser: function (data, callback) {
        // console.console(data.email)
        pool.query(userSqlMap.userAdd, [data.username, data.email, data.password, data.time], function (error, result) {
            if (error) throw error;

            callback && callback(result);
        })
    },

   //查找用户是否存在
   getUser: function (data, callback) {
       pool.query(userSqlMap.getByUser,data.username, function (error, result) {
            //    console.log(result[0])
            if (error) throw error;

            callback && callback(result[0]);
       });
   },

   //编辑修改用户
   userUpdate: function (data, callback) {
       pool.query(userSqlMap.updatUser, [data.username, data.email, data.id], function (error, result) {
           if (error) throw error;

           callback && callback(result)
       });
   },

   //修改密码
   updatePass: function (data,callback) {
       pool.query(userSqlMap.updatePassword, [data.password, data.username], function(error, result) {
            if (error) throw error;
            callback && callback(result)
            // console.log(result)
       });
   }

};
    

module.exports = userModel;