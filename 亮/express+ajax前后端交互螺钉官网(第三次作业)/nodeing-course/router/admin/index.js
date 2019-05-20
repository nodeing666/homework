//后台模块入口

var express = require('express');

var path = require('path');

var router = express.Router();





//引用用户模块
var user = require('./user');

//引用课程模块
var course = require('./course');

//引用分类模块
var category = require('./category');

//引用导航模块
var nav = require('./nav');

//引用系统设置模块
var system = require('./system');

//引用链接模块
var link = require('./link');

//渲染后台首页模块
router.get('/',function (req,res) {
    res.render('admin/index.html');
});

//使用用户模块
router.use('/user',user);

//使用课程模块
router.use('/course',course);

//使用分类模块
router.use('/category',category);

//使用导航页面
router.use('/nav',nav);

//使用系统设置模块
router.use('/system',system);

//使用用户链接模块
router.use('/link',link);

module.exports = router; 