function start(response) {
    console.log("Request handler 'start' was called.");
    var body = '<html>' +
        '<head>' +
        '<meta http-equiv="Content-Type" content="text/html; ' +
        'charset=UTF-8" />' +
        '</head>' +
        '<body>' +
        '<form action="/upload" method="post">' +
        '<textarea name="text" rows="20" cols="60"></textarea>' +
        '<input type="submit" value="Submit text" />' +
        '</form>' +
        '</body>' +
        '</html>';
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(body); // 响应请求，回复文本消息
    response.end(); // 结束响应
}

function upload(response) {
    console.log("Request handler 'upload' was called.")
    var content = "hello upload"
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(content); // 响应请求，回复文本消息
    response.end(); // 结束响应
}

exports.start = start;
exports.upload = upload;