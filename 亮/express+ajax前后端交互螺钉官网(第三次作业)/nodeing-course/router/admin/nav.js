//导航模块
var express = require('express');
var router = express.Router();

//引入导航模块数据处理的操作文件
var navModel = require('../../models/navModel.js');

//引用后端数据返回给前端的数据格式文件
var result = require('../../libs/result.js');



//这是增加导航模块
router.get('/add',function (req,res) {
    res.render('admin/nav_add.html');
});

//查找是否有这个导航
router.get('/add/getnav', function (req, res) {

   navModel.getnav(req.query, function (data) {
        if (data) {
            res.json(result.ceateResult('error', '导航已存在,请重新添加'));
        }else {
            res.json(result.ceateResult('success', '可以添加'));
        }

        //    console.log(data)
   }); 
    // console.log(req.query);
});

//添加导航逻辑
router.post('/add/navAdd', function (req, res) {
    // console.log(req.body);
    navModel.navAdd(req.body, function (data) {
        if (data) {
            res.json(result.ceateResult('success', '添加成功'));
        }else {
            res.json(result.ceateResult('error', '添加失败,请重新添加'));
        }
    });
});

//这是导航列表模块
router.get('/list',function (req,res) {
    navModel.findNav(req.query, function (data) {
        res.render('admin/nav_list.html', {data: data});
        // console.log(data)
    });
    
});


//删除导航
router.get('/list/delete', function (req, res) {
    navModel.navDelete(req.query, function (data) {

        if (data) {
            res.json(result.ceateResult('success', '删除成功'));
        }else {
            res.json(result.ceateResult('error', '删除失败,请从重新删除'));
        };
        // console.log(data);
    });
    // console.log(req.query)
});

//这是编辑导航页面
router.get('/edit',function (req,res) {

    navModel.getId(req.query, function (data) {

        if (data) {
            res.render('admin/nav_edit.html',{data: data});
        }else{
            res.json(result.ceateResult('error', '失败'));
        };
        // console.log(data)
    });
    // console.log(req.query)
    // res.render('admin/nav_edit.html');
});

//修改导航
router.get('/edit/update', function (req, res) {

    navModel.navUpdate(req.query, function (data) {

        if (data) {
            res.json(result.ceateResult('success', '修改成功'));
        }else{
            res.json(result.ceateResult('error', '修改失败,请重新修改'));
        }
        // console.log(data)
    });
    // console.log(req.query)
});

module.exports = router;