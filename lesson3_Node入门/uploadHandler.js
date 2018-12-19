var fs = require('fs');
var formidable = require('formidable');

function upload(response, request) {
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

exports.upload = upload;