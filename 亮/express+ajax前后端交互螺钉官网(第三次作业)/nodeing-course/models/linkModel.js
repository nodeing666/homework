//这是数据库操作文件

//引用连接数据库的文件
var pool = require('../libs/mysql.js');

var linkSqlMap = require('../libs/linkSqlMap.js');


//操作数据库

var linkModel = {
    //查找数据中是否有这个链接名
    getNameLink: function (data, callback) {
        pool.query(linkSqlMap.getLinkName, data.link_name, function (error, result) {
            if (error) throw error;
            callback && callback(result[0]); 
        });
    },
    
    //添加链接
    addLink: function (data, callback) {
        pool.query(linkSqlMap.linkAdd, [data.link_name, data.link_url, data.link_sort, data.link_description], function (error, result) {
            if (error) throw error;
            callback && callback(result); 
        });
    },

    // 查找所有的链接，渲染出链接列表
    linkList: function (data, callback) {
        pool.query(linkSqlMap.getLink, function (error, result) {
          
            if(error) throw error;
            callback && callback(result);

        });
    },

    //查询当前要修改链接的数据
    getlinkEdit: function (data, callback) {
        pool.query(linkSqlMap.getLinkId, data.id, function (error, result) {
            if (error) throw error;
            callback && callback(result[0]);
        }); 
    },

    //修改
    linkUpdate: function (data, callback) {
        pool.query (linkSqlMap.update, [data.link_name, data.link_url, data.link_sort, data.link_description, data.link_id], function (error,result) {
            if (error) throw error;
            callback && callback(result); 
        });
        // console.log(data.link_description)
    },

    //删除
    linkDelete: function (data, callback) {
        pool.query(linkSqlMap.delete, data.linkId, function (error, result) {
            if (error) throw error;
            callback && callback(result);
        })
    } 
};

module.exports = linkModel;
