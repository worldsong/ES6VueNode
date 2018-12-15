var http = require('http');
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) { // 使用request和response对象处理HTTP请求的细节，并响应请求
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk){
            postData += postDataChunk;
            console.log("Received Post data chunk " + postDataChunk + ".");
        });

        request.addListener("end", function () {
            route(handle, pathname, response, postData);
        })

        // response.writeHead(200, {"Content-Type": "text/plain"});
        // response.write(content); // 响应请求，回复文本消息
        // response.end(); // 结束响应
    }

    http.createServer(onRequest).listen(8888);

    console.log('Server has started.');
}

exports.start = start;