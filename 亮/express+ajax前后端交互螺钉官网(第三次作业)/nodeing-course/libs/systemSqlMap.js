//系统设置数据库命令文件

var systemSqlMap = {
    webSetting: 'insert into system_config(web_title,web_subheading,web_description,web_log,web_email,web_code_log,web_copyright,web_beAn) values(?,?,?,?,?,?,?,?)',
    getBySystem: 'select * from system_config',
    update: 'update system_config set web_title=?, web_subheading=?,web_description=?,web_log=?,web_email=?,web_code_log=?,web_copyright=?,web_beAn=? where id=?'
};

module.exports = systemSqlMap;