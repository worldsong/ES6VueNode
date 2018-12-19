var fs = require('fs');
var formidable = require('formidable');

function upload(response, request) {
    if(request.method.toLowerCase() === 'get'){
        console.log("No request handler found for upload in GET.");
        response.writeHead(301, {"Location": "/start"}); // 响应“301”重定向
        response.end(); // 结束响应
    } else {
        console.log("Request handler 'upload' was called.")
        var form = new formidable.IncomingForm();
        form.uploadDir = 'public/upload';
        console.log('about to parse');
        form.parse(request, function (err, fields, files) {
            console.log("parsing done");
            // 从缓存目录（public/upload）拷贝文件
            fs.renameSync(files.MyFile.path, "tmp/test.png");
            response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
            response.write('received image:<br/>');
            response.end("<img src ='/show'>");
        })
    }
}

exports.upload = upload;