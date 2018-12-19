var fs = require('fs');
var querystring = require('querystring');

function start(response) {
    console.log("Request handler 'start' was called.");
    var body = fs.readFileSync('./post_page.html');
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write(body); // 响应请求，回复文本消息
    response.end(); // 结束响应
}

function upload(response, postData) {
    console.log("Request handler 'upload' was called.")
    var content = "You've sent: " + querystring.parse(postData).text;
    response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    response.write(content); // 响应请求，回复文本消息
    response.end(); // 结束响应
}

function show(response, postData) {
    console.log("Request handler 'show' was called.")
    fs.readFile("tmp/test.png", "binary", function (err, file) {
        if(err){
            console.log(err);
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("服务器内部错误500！");
            response.end();
        }else {
            response.writeHead(200, {"Content-Type": "image/png"});
            response.write(file, "binary");
            response.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;