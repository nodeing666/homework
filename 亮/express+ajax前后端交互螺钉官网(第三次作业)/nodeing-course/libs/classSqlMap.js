//课程分类数据库操作语句

var classSqlMap = {
    getByName: 'select * from courseClass where name=?',
    categoryAdd: 'insert into courseClass(name,url,sort,icon,description) values(?,?,?,?,?)',
    getCategory: 'select * from courseClass',
    deleteClass: 'delete from courseClass where id=?',
    editClass: 'select * from courseClass where id=?',
    update: 'update courseClass set name=?,url=?,sort=?,icon=?,description=? where id=?'
};

module.exports = classSqlMap;