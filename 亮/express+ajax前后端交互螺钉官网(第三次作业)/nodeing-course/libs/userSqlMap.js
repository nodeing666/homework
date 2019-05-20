
//用来定义用户模块的sql语句

var userSqlMap = {
    getUser: 'select * from user',
    delete: 'DELETE from user where id = ?',
    getUserId: 'select * from user where id = ?',
    userAdd: 'insert into user(username,email,password,create_time) values(?,?,?,?)',
    getByUser: 'select * from user where username=?',
    updatePassword: 'update user set password=? where username=?',
    updatUser: 'update user set username=?,email=? where id=?',
    getByEmail: 'select * from user where email=?',
}

//导出sql语句
module.exports = userSqlMap;