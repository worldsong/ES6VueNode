var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');

http.get('http://songfens.club/users', function (response) {
    var html = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
        html += data;
    });
    response.on('end', function () {
        // 页面内容获取完成，解析页面
        var $ = cheerio.load(html);
        $('#users-container > li> div > span > a').each(function () {
            var href = this.attribs.href;
            var name = href.substr(6, href.length);
            console.log(name);
        })
    })
}).on('error', function (e) {
    console.log(e.message);
})