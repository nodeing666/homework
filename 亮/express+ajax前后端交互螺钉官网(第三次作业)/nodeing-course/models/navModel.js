//这是导航模块用来处理数据的文件，所有关于导航模块数据处理的操作我们都放到这个文件，

//引用数据库连接
var pool = require('../libs/mysql.js');

//引用数据库语句文件

var navSqlMap = require('../libs/navSqlMap.js');

var navModel = {
    //查找是否有这个导航
    getnav: function (data, callback) {
        pool.query(navSqlMap.getByNav, [data.navName, data.navUrl], function (error, result) {
            // console.log(result);
            if (error) throw error;
            callback && callback(result[0]);
        });
    },

    //添加导航
    navAdd: function (data, callback) {
        pool.query(navSqlMap.addNav, [data.navName, data.navUrl], function (error, result) {
            if(error) throw error;

            callback && callback(result);
        });
    },
    
    //渲染导航列表
    findNav: function (data, callback) {
        pool.query(navSqlMap.getNav, function (error, result) {
            // console.log(result)
            if (error) throw error;
            callback && callback(result); 
        });
    },

    //删除导航
    navDelete: function (data, callback) {
        pool.query(navSqlMap.deleteNav,data.id, function (error, result) {
            // console.log(result);
            if (error) throw error;
            callback && callback(result); 
        });
    },

    //渲染出修改导航页面
    getId: function (data, callback) {
        pool.query(navSqlMap.getById, data.id, function (error, result) {

            if (error) throw error;
            callback && callback(result[0]);
            // console.log(result[0])
        });
    },

    //修改导航
    navUpdate: function (data, callback) {
        pool.query(navSqlMap.updateNav, [data.navName, data.navUrl, data.id], function (error, result) {
            if (error) throw error;
            callback && callback(result);
        })
    }
};

module.exports = navModel;