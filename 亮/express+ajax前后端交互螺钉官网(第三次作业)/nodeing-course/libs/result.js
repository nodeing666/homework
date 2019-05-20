//设置后台数据返回给前端的格式

var result = {
    ceateResult: function (success,data) {
        return {
            success: success,
            data: data
        }
    }
}

module.exports = result;

/**
 * success：表示成功
 * data:表示数据
 */