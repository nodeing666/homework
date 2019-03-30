 //controlbar tab切换
  //获取header中的div
  var controlbox=my$("controlbox");
  //获取被控制的controledarticle
  var controledarticle=my$("controledarticle");
  //获取所有的span标签
  var spans=controlbox.getElementsByTagName("span");
  //获取所有的article标签
  var articles=controledarticle.getElementsByTagName("article");//=================================
  //循环遍历的方式,添加点击事件
  for(var i=0;i<spans.length;i++){
    //在点击之前就把索引保存在span标签中
    spans[i].setAttribute("index",i);//================================
    spans[i].onclick=function () {
      //第一件事,所有的span的类样式全部移除--->在这里指的就是移除所有span的current样式
      for(var j=0;j<spans.length;j++){
        spans[j].removeAttribute("class");
      }

      //第二件事,当前被点击的span应用类样式
      this.className="current";
      //span被点击的时候获取存储的索引值,将对应的索引值储存到num中
      var num=this.getAttribute("index");//==============================

      //获取所有的article标签,每个article标签先全部隐藏
      for(var k=0;k<articles.length;k++){
        articles[k].removeAttribute("class");
      }
      //当前被点击的span对应的article标签显示
      articles[num].className="current";
    };
  }