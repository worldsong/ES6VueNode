var exec = require('child_process').exec;

function start(response) {
    console.log("Request handler 'start' was called.");
    var content = "empty";
    // 耗时任务，模拟阻塞
    exec('tree C:/"Program Files"', {encoding: 'Song', timeout: 10000, maxBuffer: 20000 * 1024}, function (error, stdout, stderr) {
        if(error){
            console.log(error);
            response.writeHead(500, {"Content-Type": "text/plain;charset=utf-8"});
            response.write("错误500，服务器内部错误。"); // 响应请求，回复文本消息
            response.end(); // 结束响应
        } else {
            content = stdout || stderr;
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write(content); // 响应请求，回复文本消息
            response.end(); // 结束响应
        }
    })
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