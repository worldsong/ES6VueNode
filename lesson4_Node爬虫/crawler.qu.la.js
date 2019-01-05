// www.qu.la 笔趣阁小说站点
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/novels');

// mongoose使用三步走
var Schema= mongoose.Schema;
var text = new Schema({
    text: String
});
mongoose.model('Novel', text);

var URL = 'https://www.qu.la/book/3952/10529775.html';
var Book_URL = 'https://www.qu.la/book/3952/';

function myRequest(url, callback) {
    var options = {
        url: url,
        encoding: null
    }
    request(options, callback)
}

function getNovel(url) {
    myRequest(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var html = body;
            var $ = cheerio.load(html);
            var content = $('div#content').text();
            var urlNext = $('a#pager_next').attr('href');
            var realURLNext = Book_URL + urlNext;
            console.log(realURLNext);
            fs.appendFile('我是至尊.txt', content);
            // 小说内容存入数据库MongoDB
            var Novel = mongoose.model('Novel');
            var novel = new Novel();
            novel.text = content;
            novel.save(function (err) {
                if(err){
                    console.log(err);
                }else{
                    console.log('Novel is saved.');
                    mongoose.disconnect();
                }
            });
            getNovel(realURLNext)
        }
    })
}

getNovel(URL);

