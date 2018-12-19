var formidable = require('formidable');
var http = require('http');
var util = require('util');
var fs = require('fs');

http.createServer(function(request, response){
    if(request.url ==='/upload' && request.method.toLowerCase() === 'post'){
        // parse a file upload
        var form = new formidable.IncomingForm();
        console.log('Song node')

        form.parse(request, function (err, fields, files) {
            console.log(fields);
            response.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
            response.write('received upload:\n\n');
            response.end(util.inspect({fields: fields, files: files}));
        })
        return;
    }
    // show a file upload form
    var body = fs.readFileSync('./upload_file.html');
    response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    response.write(body); // 响应请求，回复文本消息
    response.end(); // 结束响应
}).listen(8080, function () {
    console.log('File Server is starting on port 8080.');
})