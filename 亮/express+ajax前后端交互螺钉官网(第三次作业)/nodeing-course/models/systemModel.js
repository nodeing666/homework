//系统设置数据库操作文件
var systSqlMap = require('../libs/systemSqlMap.js');

var pool = require('../libs/mysql.js'); 

var systemModel = {
    //设置系统信息
    setting: function (data, callback) {
        pool.query(systSqlMap.webSetting, [data.web_title, data.web_subheading, data.web_description, data.web_log, data.web_email, data.web_code_log, data.web_copyright, data.web_beAn], function (error, result) {
            if (error) throw error;
            callback && callback(result);
        });
    },

    //获取系统信息
    getSystem: function (data, callback) {
        pool.query(systSqlMap.getBySystem, function (error, result) {
            if (error) throw error;
            callback && callback(result[0]);
        });
    },

    //修改设置

    updateSystem: function (data, callback) {
        pool.query(systSqlMap.update, [data.web_title, data.web_subheading, data.web_description, data.web_log, data.web_email, data.web_code_log, data.web_copyright, data.web_beAn, data.system_id], function (error, result) {
            if (error) throw error;
            callback && callback(result);
        });
    }
};

module.exports = systemModel;