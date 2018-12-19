var fs = require('fs');
var querystring = require('querystring');
var formidable = require('formidable');

function start(response) {
    console.log("Request handler 'start' was called.");
    var body = fs.readFileSync('./upload_file.html');
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write(body); // 响应请求，回复文本消息
    response.end(); // 结束响应
}

function upload(response, request) {
    console.log("Request handler 'upload' was called.")
    var form = new formidable.IncomingForm();
    form.uploadDir = 'public/upload';
    console.log('about to parse');
    form.parse(request, function (err, fields, files) {
        console.log("parsing done");
        console.log(files)
        // 从缓存目录（public/upload）拷贝文件
        fs.renameSync(files.MyFile.path, "tmp/test.png");
        response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
        response.write('received image:<br/>');
        response.end("<img src ='/show'>");
    })
}

function show(response) {
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