var http = require('http')

var url = require('url')

var fs = require('fs')

var queryString = require('querystring')

var cookie = require('cookie')

//=============================================
//引入数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'yuanhan-website'
});
//连接数据库
connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack)
        return
    }

    console.log('connected as id ' + connection.threadId)
})
//===================================================


var app = http.createServer(function (req, res) {

    var urlObj = url.parse(req.url)
    //渲染首页
    if (urlObj.pathname === '/') {
        render('./index.html', res)
        return
    }
    //处理注册功能逻辑
    if (urlObj.pathname === '/register' && req.method === 'POST') {
        //1.接收前台发送过来的数据
        var userInfo = ''
        req.on('data', function (chunk) {
            userInfo += chunk
        })
        req.on('end', function (err) {
            if (!err) {
                //如果请求没有错误，那我们就拿到了前端发过来的完整数据了，接下来要做的就是对数据进行分析和处理
                var userObj = queryString.parse(userInfo)
                res.setHeader('content-type', 'text/html;charset=utf-8')
                //判断是否为空
                if (userObj.username === '' || userObj.password === '') {
                    res.write('{"status":1,"message":"用户名和密码不能为空"}', 'utf-8')
                    res.end()
                    return
                }
                //判断两次密码是否一致
                if (userObj.password !== userObj.repassword) {
                    res.write('{"status":1,"message":"两次密码输入不一致"}', 'utf-8')
                    res.end()
                    return
                }
                //将用户数据写入到数据库
                //写一个mysql语句
                var sql = 'INSERT INTO admin(username, password) VALUE ("' + userObj.username + '","' + userObj.password + '")'
                connection.query(sql, function (err, result) {
                    //如果没有错误，并且resule长度不为零，则返回注册成功
                    if (!err && result && result.length !== 0) {
                        res.write('{"status":200,"message":"注册成功"}', 'utf-8')
                        res.end()
                        return
                    }
                })


            }
        })
        return
    }
    //处理登陆业务逻辑
    if (urlObj.pathname === '/login' && req.method === 'POST') {
        var userInfo = ''
        req.on('data', function (chunk) {
            userInfo += chunk
        })
        req.on('end', function (err) {
            if (!err) {
                //需要把接收过来的数据和数据库里的数据进行比对
                var userObj = queryString.parse(userInfo)
                var sql = 'SELECT * FROM admin WHERE username = "' + userObj.username + '" AND password = "' + userObj.password + '"'
                connection.query(sql, function (err, result) {
                    res.setHeader('content-type', 'text/html;charset=utf-8')
                    if (!err && result && result.length != 0) {
                        //在这里设置一个cookie，带回到浏览器
                        res.setHeader('Set-Cookie',cookie.serialize('isLogin','true'))
                        res.write('{"status":200,"message":"登陆成功"}', 'utf-8')
                        res.end()
                    } else {
                        res.write('{"status":1,"message":"账号或密码错误，请重新输入"}', 'utf-8')
                        res.end()
                    }
                })

            }
        })
        return
    }
    //返回留言本数据
    if (urlObj.pathname === '/list' && req.method === 'GET') {
        //连接数据库，把所有的数据库都查询出来
        var sql = 'SELECT * FROM leaveword'
        connection.query(sql, function (err, result) {
            if (!err && result) {
                res.setHeader('content-type', 'text/html;charset=utf-8')
                res.write(JSON.stringify(result))
                res.end()
            }
        })
        return
    }
    //添加留言本数据
    if (urlObj.pathname === '/adduser' && req.method === 'POST') {
        var userInfo = ''
        req.on('data', function (chunk) {
            userInfo += chunk
        })
        req.on('end', function (err) {
            if (!err) {
                var userObj = queryString.parse(userInfo)
                var sql = 'INSERT INTO leaveword VALUE (' + null + ',"' + userObj.name + '","' + userObj.phone + '","' + userObj.word + '")'
                connection.query(sql, function (err, result) {
                    res.setHeader('content-type', 'text/html;charset=utf-8')
                    if (!err && result && result.length != 0) {
                        res.write('{"status":200,"message":"添加成功"}', 'utf-8')
                        res.end()
                    } else {
                        res.write('{"status":1,"message":"添加失败"}', 'utf-8')
                        res.end()
                    }
                })
            }
        })
        return
    }
    //接收用户修改后的留言信息，然后发送到数据库中进行保存
    if (urlObj.pathname === '/modification' && req.method === 'POST') {
        var userInfo = ''
        req.on('data', function (chunk) {
            userInfo += chunk
        })
        req.on('end', function (err) {
            if (!err) {
                var userObj = queryString.parse(userInfo)
                var sql = 'UPDATE leaveword SET name="' + userObj.name + '",phone="' + userObj.phone + '",word="' + userObj.word + '" WHERE id="' + userObj.id + '"'
                connection.query(sql, function (err, result) {
                    res.setHeader('content-type', 'text/html;charset=utf-8')
                    if (!err && result && result.length != 0) {
                        res.write('{"status":200,"message":"修改成功"}', 'utf-8')
                        res.end()
                    } else {
                        res.write('{"status":1,"message":"修改失败"}', 'utf-8')
                        res.end()
                    }
                })
            }
        })
        return
    }
    //接收到前端发来的要删除的id，然后进行删除
    if (urlObj.pathname === '/delete' && req.method === 'POST') {
        var userInfo = ''
        req.on('data', function (chunk) {
            userInfo += chunk
        })
        req.on('end', function (err) {
            if (!err) {
                var userObj = queryString.parse(userInfo)
                //前端传过来的id是一个字符串类型的，我们需要给转换成数字
                var sql = 'DELETE FROM leaveword WHERE id='+Number(userObj.id)
                connection.query(sql, function (err, result) {
                    res.setHeader('content-type', 'text/html;charset=utf-8')
                    if (!err && result && result.length != 0) {
                        res.write('{"status":200,"message":"删除成功"}', 'utf-8')
                        res.end()
                    } else {
                        res.write('{"status":1,"message":"删除失败"}', 'utf-8')
                        res.end()
                    }
                })
            }
        })
    }
    //对留言本界面进行登录验证
    if(urlObj.pathname === '/contact.html'){
        if(cookie.parse(req.headers.cookie || '').isLogin === 'true'){
            render('./contact.html',res)
        }else{
            render('./error.html',res)
        }
        return
    }
    //自动渲染所有的静态资源
    render('.' + urlObj.pathname, res)

})
//监听端口
app.listen(4000, function (err) {
    if (!err) {
        console.log('port 4000 is running')
    }
})
//自动渲染所有静态资源的render函数封装
function render(path, res) {
    //binary用二进制的方式读取文件，但是只是在下面这一行改的话，读取结果是乱码
    fs.readFile(path, 'binary', function (err, data) {
        if (!err) {
            //需要用二进制的形式写回去才行
            res.write(data, 'binary')
            res.end()
        }
    })
}
