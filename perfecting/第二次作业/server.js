var http = require('http');
var url = require('url');
var fs = require('fs');

var app = http.createServer(function (req, res) {
    var url_obj = url.parse(req.url);
    if (url_obj.pathname === '/') {
        console.log("​url_obj.pathname", url_obj.pathname)
        fs.readFile('index.html', 'utf-8', function (err, data) {
            res.write(data);
            res.end();
        })
    }

    if (url_obj.pathname === '/news') {
        console.log("​url_obj.pathname", url_obj.pathname)
        fs.readFile('news.html', utf - 8)
        res.write(data);
        res.end();
    }
})
app.listen('8000');