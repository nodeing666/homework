/**
 *如果是默认参数 就可以不传
 * @param method 请求的方法
 * @param url 请求的地址
 * @param data 发送的数据
 * @param success 数据请求成功以后，需要处理的业务逻辑 就是一个函数块
 * return undefined
 */
function ajax(options) {
  // 给method默认值  默认为get
  var method = options.method || 'get';
  //  发送请求
  var xhr = null;
  try {
    xhr = new XMLHttpRequest();
  } catch (e) {
    xhr = new ActiveXObject('Microsoft.XMLHTTP');
  }
  if (method.toLowerCase() === 'get') {
    xhr.open('get', options.url + "?" + options.data, true);
    xhr.send();
  } else if (method.toLowerCase() === 'post') {

    xhr.open('post', options.url, true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.send(options.data);
  } else {
    console.log("请求方式不正确")
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var arr = JSON.parse(xhr.responseText);
      /**
       * success ==  function(data){
          var oUl = document.getElementById('ul1');
          //  创建li 把数据放到li里面去
          for(var i=0;i < data.length; i++){
            var oLi = document.createElement('li');
            oLi.innerHTML = arr[i].title;
            oUl.appendChild(oLi);
          }
        }
       */
      options.success && options.success(arr);

      // function aa(data){}
      //
      // aa(arr)
    }

  }
}
