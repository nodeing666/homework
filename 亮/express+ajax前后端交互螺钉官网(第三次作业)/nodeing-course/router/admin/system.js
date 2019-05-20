//系统设置模块
var express = require('express');

var router = express.Router();

var systemModel = require('../../models/systemModel.js');

var result = require('../../libs/result.js');

//系统设置列表页面
router.get('/',function (req,res) {

    systemModel.getSystem(req.query, function (data) {
        // console.log(data)
        res.render('admin/system_config.html',{data:data});

    });
    // res.render('admin/system_config.html');
});


//查找看是否有设置
router.get('/findSystem', function (req, res) {
    systemModel.getSystem(req.query, function (data) {
        // console.log(data)
        if (!data) {
            res.json(result.ceateResult('success','没有设置,可以添加'));
        } else {

            res.json(result.ceateResult('error','已有设置,修改就行了'));
        }

    });
});

router.get('/setting', function (req, res) {
    // console.log(req.query)
    systemModel.setting(req.query, function (data) {
        // console.log(data)
        if (data) {
            if (data) {
                res.json(result.ceateResult('success', '设置成功'));
            } else {
                res.json(result.ceateResult('error','设置失败，请重新设置'))
            }
        }
    });
});


//修改设置
router.get('/updateSystem', function (req, res) {
    
    systemModel.updateSystem(req.query, function (data) {
        if (data) {
            res.json(result.ceateResult('success', '修改成功'));
        } else {
            res.json(result.ceateResult('error','修改失败，请重新修改'))
        }
    });
});

module.exports = router;