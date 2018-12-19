var http = require('http');
var url = require("url");

function start(route, handle) {
    function onRequest(request, response) { // 使用request和response对象处理HTTP请求的细节，并响应请求
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received');
        route(handle, pathname, response, request)
    }

    http.createServer(onRequest).listen(8888);

    console.log('Server has started.');
}

exports.start = start;