// 课程分类数据库操作文件， 用来操作数据库

var pool = require('../libs/mysql.js');

var classSqlMap = require('../libs/classSqlMap.js');

var classModel = {
    //验证类名是否存在
    getName: function (data, callback) {
        pool.query(classSqlMap.getByName, data.className, function (error, result) {
            if (error) throw error;
            callback && callback(result[0]); 
        });
    },
    //添加分类
    addCategory: function (data, callback) {
        pool.query(classSqlMap.categoryAdd, [data.className,  data.classUrl,data.sort, data.icon, data.description], function (error, result) {

            if (error) throw error;
            callback && callback(result);
        });
    },

    //渲染分类列表
    categoryList: function (data, callback) {
        pool.query(classSqlMap.getCategory, function (error, result) {
            if (error) throw error
            callback && callback(result)
        });
    },

    //删除分类列表
    classDelete: function (data, callback) {
        pool.query (classSqlMap.deleteClass, data.categoryId, function (error, result) {
            if (error) throw error;
            callback && callback(result);
        });
    },

    //渲染分类编辑页面
    classEdit: function (data, callback) {
        pool.query(classSqlMap.editClass, data.id, function (error, result) {
            if (error) throw error;
            callback && callback(result[0]);
        });
        // console.log(data.categoryId)
    },

    //修改
    classUpdate: function (data, callback) {
        pool.query(classSqlMap.update, [data.className, data.classUrl, data.sort, data.icon, data.description, data.id], function (error, result) {
            if (error) throw error;
            callback && callback(result);
        });
    }
};

module.exports = classModel;