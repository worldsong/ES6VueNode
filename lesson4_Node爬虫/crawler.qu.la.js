// www.qu.la 笔趣阁小说站点
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

request('https://www.qu.la/book/3952/10529775.html', function (error, response, body) {
    if(!error && response.statusCode === 200){
        console.log(body);
        fs.appendFileSync('qu.la.html', body)
    }
})
