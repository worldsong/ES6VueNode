var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

console.log(server);
server.start(router.route, requestHandlers.handle);