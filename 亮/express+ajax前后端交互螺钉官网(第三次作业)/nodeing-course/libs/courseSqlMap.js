//数据库命令文件

var courseSqlMap = {
    getCoures: 'select * from course where course_name=?',
    courseAdd: 'insert into course(course_name,course_url,course_class,course_num,course_status) values(?,?,?,?,?)',
    getByCourse: 'select * from course',
    courseDelete: 'delete from course where id=?',
    getCouresId: 'select * from course where id=?',
    update: 'update course set course_name=?,course_url=?,course_class=?,course_num=?,course_status=? where id=?'
};

module.exports = courseSqlMap;