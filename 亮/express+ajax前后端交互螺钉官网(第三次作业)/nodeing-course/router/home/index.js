//前台模块

var express = require('express');
var router = express.Router();

//引入用户模块数据处理的操作文件
var homeMode = require('../../models/homeMode.js');


//引用后端数据返回的前端的数据格式文件
var result = require('../../libs/result.js');

//引入post方式发送过来接收数据的插件的数据(body-parser)
var bodyParser = require('body-parser');

//使用body-parser插件
router.use(bodyParser.urlencoded({extended: false}));

//前台首页
router.get('/',function (req,res) {  
    var arrData = {};   //创建一个对象，用来存放数据
    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1
        // console.log(data1)           
        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;       
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                homeMode.findCategory(req.query, function (data4) {
                    // console.log(data2)
                    arrData.data4 = data4;
                                           
                    res.render('home/index.html',{arrData: arrData});
                    
                });
    
            });    
        
        });
        
    });
});

//登录页
router.get('/signin',function (req,res) {
    var arrData = {};
    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1
        // console.log(data1)
        
        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                
                res.render('home/login.html',{arrData: arrData});

            });    
        
        });
        
    });
    // res.render('home/login.html');
});

//前台登录逻辑
router.post('/login', function (req,res) {
    // console.log(req.body);
    //将数据发送到数据库做验证
    homeMode.getLogin(req.body, function (data) {
        if (data) {
            res.json(result.ceateResult('success','登录成功'));
        }else{
            res.json(result.ceateResult('error','登录失败,用户名或密码错误'));
        }
    });
});


//注册页
router.get('/signup',function (req,res) {

    var arrData = {};

    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1
        // console.log(data1)
        // res.render('home/register.html',{arrData: arrData});

        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                
                res.render('home/register.html',{arrData: arrData});

            });    
        
        });
        
    });
    
    // res.render('home/register.html');
});

//前台注册相关逻辑
router.get('/signup/getuser',function (req,res) {  
    //将后台数据发送到数据库做查找
    homeMode.findOne(req.query, function (data) {

        if (data) {
            res.json(result.ceateResult('error',"用户已经存在"))
        }else{
            res.json(result.ceateResult('success','可以注册'));
        }
    });

});
//注册
router.post('/signup/register', function (req,res) {
    
    homeMode.addOne(req.body, function (data) {
        if (data) {
            res.json(result.ceateResult('success','注册成功'));
        }else{
            res.json(result.ceateResult('error',"注册失败"));
        }
        // console.log(data)
    })
});


//前台退出页
router.get('/signout',function (req,res) {
    res.render('home/test.html');
});

//这是零基础页
router.get('/foundation',function (req,res) {
    var arrData = {};
    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1;

        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                
                // res.render('home/foundation.html',{arrData: arrData});

                homeMode.findCourse(req.query, function (data4) {
                    arrData.data4 = data4;
                
                    res.render('home/foundation.html',{arrData: arrData});
                    // console.log(arrData.data4)

                });
                // console.log(req.query)

            });    
        
        });
        
    });

    // res.render('home/foundation.html');
});

//前台进阶实战页面
router.get('/progress',function (req,res) {

    var arrData = {};

    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1;
        // console.log(data1)
        // res.render('home/progress.html',{arrData: arrData});

        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                
                // res.render('home/progress.html',{arrData: arrData});
                homeMode.findCourse(req.query, function (data4) {
                    arrData.data4 = data4;
                
                    res.render('home/progress.html',{arrData: arrData});
                    // console.log(arrData.data4)

                });

            });    
        
        });
        
    });
 
//    res.render('home/progress.html');
});

//前台高级修炼页面
router.get('/senior',function (req,res) {
    var arrData = {};

    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1;
        // console.log(data1)
        // res.render('home/senior.html',{arrData: arrData});

        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                
                // res.render('home/senior.html',{arrData: arrData});
                homeMode.findCourse(req.query, function (data4) {
                    arrData.data4 = data4;
                
                    res.render('home/senior.html',{arrData: arrData});
                    // console.log(arrData.data4)

                });

            });           
        });       
    });
    // res.render('home/senior.html');
});

//前台这是战力强化页面
router.get('/strengthen',function (req,res) {
    var arrData = {};

    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1;
        // console.log(data1)
        // res.render('home/strengthen.html',{arrData: arrData});

        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                
                // res.render('home/strengthen.html',{arrData: arrData});
                homeMode.findCourse(req.query, function (data4) {
                    arrData.data4 = data4;
                
                    res.render('home/strengthen.html',{arrData: arrData});
                    // console.log(arrData.data4)

                });

            });           
        });       
        
    });

    // res.render('home/strengthen.html');
});

//移动端开发
router.get('/mobile',function (req,res) {
    var arrData = {};

    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1;
        // console.log(data1)
        // res.render('home/mobile.html',{arrData: arrData});

        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;
                
                // res.render('home/mobile.html',{arrData: arrData});
                homeMode.findCourse(req.query, function (data4) {
                    arrData.data4 = data4;
                
                    res.render('home/mobile.html',{arrData: arrData});
                    // console.log(arrData.data4)

                });
                
            });           
        });            
    });
    // res.render('home/mobile.html');
});

//全栈开发页面
router.get('/fullstack',function (req,res) {

    var arrData = {};

    homeMode.findNav(req.query, function (data1) {
        arrData.data1 = data1;
        // console.log(data1)
        // res.render('home/fullstack.html',{arrData: arrData});

        homeMode.findLink(req.query, function (data2) {
            arrData.data2 = data2;
        
            homeMode.findSystem(req.query, function (data3) {
                arrData.data3 = data3;               
                // res.render('home/fullstack.html',{arrData: arrData});

                homeMode.findCourse(req.query, function (data4) {
                    arrData.data4 = data4;
                
                    res.render('home/fullstack.html',{arrData: arrData});
                    // console.log(arrData.data4)

                });
            });           
        });             
    });
    // res.render('home/fullstack.html'); 
});



module.exports = router;