// www.qu.la 笔趣阁小说站点

var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');

https.get('https://www.qu.la/book/3952/10529775.html', function (response) {
    var html = '';
    response.setEncoding('utf8');
    response.on('data', function (data) {
        html += data;
    });
    response.on('end', function () {
        // 页面内容获取完成，解析页面
        console.log(html);
        fs.appendFileSync('qu.la.html', html);
    })
}).on('error', function (e) {
    console.log(e.message);
})