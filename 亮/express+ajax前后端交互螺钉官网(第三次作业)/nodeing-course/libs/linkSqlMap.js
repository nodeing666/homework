//这里是链接模块数据库的语句

var linkSqlMap = {
    getLinkName: 'select * from link where link_name=?',
    linkAdd: 'insert into link(link_name,link_url,link_sort,link_description) values(?,?,?,?)',
    getLink: 'select * from link ',
    getLinkId: 'select * from link where id=?',
    delete: 'delete from link where id=?',
    update: 'update link set link_name=?,link_url=?,link_sort=?,link_description=? where id=?'
};

module.exports = linkSqlMap;