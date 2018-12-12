var server = require('./server.js');
var router = require('./router.js');

console.log(server);
server.start(router.route);