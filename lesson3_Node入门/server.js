var http = require('http');

function onRequest(request, response) { // 使用request和response对象处理HTTP请求的细节，并响应请求
    console.log('Request received');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello world"); // 响应请求，回复文本消息
    response.end(); // 结束响应
}

http.createServer(onRequest).listen(8888);

console.log('Server has started.');