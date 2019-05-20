//这是链接模块

var express = require('express');
var router = express.Router();

//引入数据库操作文件
var linkModel = require('../../models/linkModel.js');

//引入后台返回给前台的数据格式文件
var result = require('../../libs/result');


//这是添加链接页面
router.get('/add',function (req,res) {
    res.render('admin/link_add.html');
});
//查询后台有没有这个链接
router.get('/add/getNameLink', function (req, res) {

    linkModel.getNameLink(req.query, function (data) {
        // console.log(data);

        if (data) {
            res.json(result.ceateResult('error', '链接名已存在,请重新输入'));
        } else {
            res.json(result.ceateResult('success', '此链接可以添加'));
        }
    });
    // console.log(req.query)
});

//添加链接
router.post('/add/addLink', function (req, res) {
    
    // console.log(req.body)

    linkModel.addLink(req.body, function (data) {
        // console.log(data);

        if (data) {
            res.json(result.ceateResult('success', '添加成功'));
        } else {
            res.json(result.ceateResult('error', '添加失败,请重新添加'));
        }
    });
});


//这是链接列表页面
router.get('/list',function (req,res) {

    linkModel.linkList(req.query, function (data) {
        // console.log(data)
        res.render('admin/link_list.html', {data: data});

    });
    // res.render('admin/link_list.html');
});

//这是编辑链接页面
router.get('/edit',function (req,res) {

    linkModel.getlinkEdit(req.query, function (data) {
        // console.log(data);
        if (data) {

            res.render('admin/link_edit.html', {data: data});

        };
    });
    // res.render('admin/link_edit.html');
});

// //查找用户名是否存在
// router.get('/edit/getByLink', function (req, res) {

//     linkModel.getNameLink(req.query, function (data) {
//         // console.log(data)

//         if (data) {
//             res.json(result.ceateResult('error', '链接名已存在,请重新输入'));
//         } else {
//             res.json(result.ceateResult('success', '此链接可以添加'));
//         }

//     });

// });

//修改

router.post('/edit/update', function (req, res) {

    // console.log(req.body)
    linkModel.linkUpdate(req.body, function (data) {

        if (data) {
            res.json(result.ceateResult('success', '修改成功'));
        } else {
            res.json(result.ceateResult('error', '修改失败,请重新修改'));
        }
        // console.log(data)
    });
});

//删除
router.get('/list/delete', function (req, res) {

    linkModel.linkDelete(req.query, function (data) {
        // console.log(data);
        if (data) {
            res.json(result.ceateResult('success', '删除成功'));
        } else {
            res.json(result.ceateResult('error', '删除失败,请重新删除'));
        }
    });
    // console.log(req.query)
});

module.exports = router;