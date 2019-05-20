//这是课程模块的数据库操作文件

//引入数据库连接文件
var pool = require('../libs/mysql.js');

//引入数据库命令文件
var courseSqlMap = require('../libs/courseSqlMap.js');

var courseModel = {
    //查询数据库里有没有这个课程。

    getCoures: function (data, callback) {
        pool.query(courseSqlMap.getCoures, data.course_name ,function (error, result) {
            if (error) throw error;
            callback && callback(result[0]);
        });
    },

    //添加课程
    addCourse: function (data, callback) {
        pool.query(courseSqlMap.courseAdd, [data.course_name, data.course_url, data.course_class, data.course_num, data.course_status], function (error, result) {
            if (error) throw error;
            callback && callback(result);
        });
    },
    
    //查找所有课程，渲染出课程列表
    getBycourse: function (data, callback) {
        pool.query(courseSqlMap.getByCourse, function (error, result) {
            if (error) throw error;
            callback && callback(result);
        });
    },

    //删除课程
    deleteCourse: function (data, callback) {
        pool.query(courseSqlMap.courseDelete, data.courseId ,function (error, result) {
            if (error) throw error;
            callback && callback(result)
        });
    },

    //按id渲染编辑页面
    courseId: function (data, callback) {
        pool.query(courseSqlMap.getCouresId, data.id, function (error, result) {
            if (error) throw error;
            callback && callback(result[0]); 
        });
    },
    courseUpdate: function (data, callback) {
        pool.query(courseSqlMap.update, [data.course_name, data.course_url, data.course_class, data.course_num, data.course_status, data.course_id] ,function (error, result) {
            if (error) throw error;
            callback && callback(result); 
        });
    }
};

module.exports = courseModel;