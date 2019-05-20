//前台数据库语句

var homeSqlMap = {
    getlogin: 'select * from user where username=? and password=?',
    getByEmail: 'select * from user where email=?',
    add: 'insert into user(email,username,password,create_time) values(?,?,?,?)',
    navFind: 'select * from nav',
    findClass: 'select * from courseClass',
    linkFind: 'select * from link',
    systemFind: 'select * from system_config',
    courseFind: 'select * from course  where course_class=?'
}


module.exports = homeSqlMap;