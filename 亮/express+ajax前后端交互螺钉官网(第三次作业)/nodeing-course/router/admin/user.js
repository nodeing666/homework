//用户模块

var express = require('express');
var router = express.Router();

//引入用户模块数据处理的操作文件
var userModel = require('../../models/useModel');


//引用后端数据返回的前端的数据格式文件
var result = require('../../libs/result.js');




//这是后台用户列表页面
router.get('/list',function (req,res) {
    
    userModel.findUser (req.query, function (data) {
        
        res.render('admin/user_list.html',{data: data});
        // res.json({data:data})
    });
});


//这是后台用户增加页面
router.get('/add',function (req,res) {
    res.render('admin/user_add.html');
});


//验证后台用户是否存在
router.get('/add/getuser', function (req, res) {
    userModel.findOne (req.query, function (data) {
        if (data) {
            res.json(result.ceateResult('error',"邮箱存在,请换一个"));
        }else {
            res.json(result.ceateResult('success', '邮箱不存在,可以添加'));
        }
    });
});

//后台增加用户请求
router.post('/add/userAdd', function (req, res) {
    // console.log(req.body)
    // res.render("sdad")
    userModel.addUser (req.body, function (data) {
        if (data) {
            res.json(result.ceateResult('success', '添加成功'));
        }else {
            res.json(result.ceateResult('error',"添加失败"));
        }
    });
});




//这是用户编辑页面
router.get('/edit',function (req,res) {
    
    userModel.getId (req.query, function (data) {

        if (data) {
            res.render('admin/user_edit.html',{data: data});
        }else{
            res.json(result.ceateResult('error', '失败'));
        }
        // console.log(data)
        
        // res.render('admin/user_edit.html',{data: data});
        // res.json({data:data})
    });
    // console.log(req.query)
});
//保存修改的内容
router.get('/user_edit/update', function (req, res) {
    // console.log(req.query);
    userModel.userUpdate(req.query, function (data) {
        // console.log(data)
        if (data) {
            res.json(result.ceateResult('success', '编辑成功'));
        }else {
            res.json(result.ceateResult('error', '编辑失败,请重新编辑'));
        }
    });
});


//这是用户密码修改页面
router.get('/edit_pass',function (req,res) {
    res.render('admin/user_password_edit.html');
});
//查询当前用户是否存在
router.get('/edit_pass/getUser', function (req, res) {
    userModel.getUser(req.query, function (data) {
        // console.log(data)
        if (data) {
            res.json(result.ceateResult('success', '用户名存在,可以修改'));
        }else {
            res.json(result.ceateResult('error',"用户名不存在,请输入正确用户名"));
        }
    });
    // console.log(req.query);
});
//修改密码
router.post('/edit_pass/update', function (req, res) {
    // console.log(req.body);
    userModel.updatePass(req.body, function (data) {
        // console.log(data);
        if (data) {
            res.json(result.ceateResult('success', '修改成功'));
        }else {
            res.json(result.ceateResult('error', '修改失败,请重新修改'));
        }
    });
});

//删除用户
router.post('/deleteUser', function (req, res) {
    userModel.deleteUser(req.body, function (data) {
        if (data) {
            res.json(result.ceateResult('success', '删除成功'));
        }else {
            res.json(result.ceateResult('error',"删除失败"));
        }
    });
});


module.exports = router;