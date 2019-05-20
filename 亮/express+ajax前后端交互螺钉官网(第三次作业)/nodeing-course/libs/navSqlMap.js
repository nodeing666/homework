//用来定义导航模块的sql语句

var navSqlMap = {
    addNav: 'insert into nav(nav_name,nav_url) values(?,?)',
    getByNav: 'select * from nav where nav_name=? and nav_url=?',
    getNav: 'select * from nav',
    deleteNav: 'delete from nav where id=?',
    getById: 'select * from nav where id=?',
    updateNav: 'update nav set nav_name=?,nav_url=? where id=?'
};


module.exports = navSqlMap