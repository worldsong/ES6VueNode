var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
// 跨越CORS配置
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/users.json', function (req, res) {
    res.sendFile(path.join(__dirname, "./database/users.json"));
})

app.post('/users.json', function (req, res) {
    console.log(req.body);
    var pass_message = require(path.join(__dirname, "./database/users.json"));
    pass_message[req.body.email] = req.body;
    fs.writeFile("./database/users.json", JSON.stringify(pass_message))
    res.send(200);
})

app.listen(3000, function () {
    console.log('Server is starting on port 3000.')
})