//课程模块
var express = require('express');
var router = express.Router();

//引入数据库操作文件
var courseModel = require('../../models/courseModel.js');

var result = require('../../libs/result.js');

//这是课程添加模块
router.get('/add',function (req,res) {
    res.render('admin/course_add.html');
});
//查找库里是否有这个课程
router.get('/add/getCourse', function (req, res) {
    // console.log(req.query)
    courseModel.getCoures(req.query, function (data) {
        // console.log(data);

        if (data) {
            res.json(result.ceateResult('error','课程已经存在,请重新添加'));
        }else {
            res.json(result.ceateResult('success','可以添加'));
        }
    });
});
//添加课程
router.post('/add/addCourse', function (req, res) {

    courseModel.addCourse(req.body, function (data) {
        // console.log(data);

        if (data) {
            res.json(result.ceateResult('success','添加成功'));
        } else {
            res.json(result.ceateResult('error','添加失败,请重新添加'));
        }
    });
    // console.log(req.body);
});

//这是课程列表模块
router.get('/list',function (req,res) {

    courseModel.getBycourse(req.query, function (data) {
        // console.log(data)
        if (data) {

            res.render('admin/course_list.html', {data:data});
        };

    });
});

//这是课程编辑模块
router.get('/edit',function (req,res) {
    
    courseModel.courseId(req.query, function (data) {
        // console.log(data)
        res.render('admin/course_edit.html', {data: data});

    });
    // console.log(req.query)
});

// //查找用户是否存在
// router.get('/edit/getByCourse', function (req, res) {

//     courseModel.getCoures(req.query, function (data) {
//         // console.log(data);
//         if (data) {
//             res.json(result.ceateResult('error','此课程名已经存在'));
//         } else {
//             res.json(result.ceateResult('success','可以修改'));
//         }
//     });
//     // console.log(req.query)
// });

//修改课程
router.post('/edit/update', function (req, res) {

    courseModel.courseUpdate(req.body, function (data) {
        // console.log(data);
        if (data) {
            res.json(result.ceateResult('success', '修改成功'))
        } else {
            res.json(result0.ceateResult('error', '修改失败,请重新修改'));
        }; 
    });
    // console.log(req.body);
});

//删除课程
router.get('/list/delete', function (req, res) {
    // console.log(req.query)
    courseModel.deleteCourse(req.query, function (data) {
        // console.log(data);
        if (data) {
            res.json(result.ceateResult('success','删除成功'));
        } else {
            res.json(result.ceateResult('error', '删除失败，请重新删除'));
        }
    });
});
module.exports = router;