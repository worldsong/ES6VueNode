function route(handle, pathname, response, request) {
    console.log("About to route a request for " + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response, request);
    } else {
        console.log("No request handler found for " + pathname);
        var content = "404 Not Found";
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write(content); // 响应请求，回复文本消息
        response.end(); // 结束响应
    }
}

exports.route = route;