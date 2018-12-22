// www.qu.la 笔趣阁小说站点
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var URL = 'https://www.qu.la/book/3952/10529775.html';
var Book_URL = 'https://www.qu.la/book/3952/';

function myRequest(url, callback) {
    var options = {
        url: url,
        encoding: null
    }
    request(options, callback)
}

myRequest(URL, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var html = body;
        var $ = cheerio.load(html);
        var content = $('div#content').text();
        var urlNext = $('a#pager_next').attr('href');
        var realURLNext = Book_URL + urlNext
        console.log(realURLNext)
        myRequest(realURLNext,function () {
            myRequest(realURLNext)
                ....
        })
    }
})
