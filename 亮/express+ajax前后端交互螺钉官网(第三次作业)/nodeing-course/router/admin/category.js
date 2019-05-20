//分类模块

var express = require('express');
var router = express.Router();

var classMode = require('../../models/classModel.js');

var result = require('../../libs/result.js');

//这是分类列表页面
router.get('/list',function (req,res) {

    classMode.categoryList(req.query, function (data) {

        res.render('admin/category_list.html', {data: data});
        // console.log(data)
    });
});


//这是增加分类页面
router.get('/add',function (req,res) {
    res.render('admin/category_add.html');
});

//验证类名是否存在
router.get('/add/getName', function (req, res) {

    classMode.getName(req.query, function (data) {

        if (data) {
            //当查询有东西时，报错
            res.json(result.ceateResult('error', '用户已经存在，请重新输入'));
        } else {
            res.json(result.ceateResult('success', '可以添加'));
        }
    });
    // console.log(req.query)
});


//添加分类
router.post('/add/addCategory', function (req, res) {

    classMode.addCategory(req.body, function (data) {

        if (data) {
            
            res.json(result.ceateResult('success', '添加成功'));
        } else {
            res.json(result.ceateResult('error', '添加失败，请重新添加'));
        }
    });

    // console.log(req.body)
});

//这是编辑分类页面
router.get('/edit', function (req,res) {

    classMode.classEdit (req.query, function (data) {

        if (data){
            res.render('admin/category_edit.html',{data: data})
        }else{
            res.json(result.ceateResult('error','失败'));
        }
        // console.log(data)
       
    });
    // console.log(req.query)
    // res.render('admin/category_edit.html');
});

// router.get('/edit/getByName', function (req, res) {
//     // console.log(req.query)
//     classMode.getName(req.query, function (data) {

//         if (data) {
//             //当查询有东西时，报错
//             res.json(result.ceateResult('error', '地址已经存在，请重新输入'));
//         } else {
//             res.json(result.ceateResult('success', '可以添加'));
//         }

//     });

// });

router.post('/edit/update', function (req, res) {
    // console.log(req.body)

    classMode.classUpdate(req.body, function (data) {
        console.log(data);
        if (data) {
        
            res.json(result.ceateResult('success', '修改成功'));
        } else {
            res.json(result.ceateResult('error', '修改失败,请重新修改'));
        }
    });
});

//删除分类列表
router.get('/list/delete', function (req, res) {
    
    classMode.classDelete(req.query, function (data) {

        if (data) {
        
            res.json(result.ceateResult('success', '删除成功'));
        } else {
            res.json(result.ceateResult('error', '删除失败,请重新删除'));
        }
        
        // console.log(data);
    });
});
module.exports = router;