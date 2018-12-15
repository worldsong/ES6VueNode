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

exports.start = start;
exports.upload = upload;