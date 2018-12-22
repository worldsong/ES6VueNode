var cheerio = require('cheerio');

$ = cheerio.load('<h2 class="title">Hello world</h2>')

$('.title').text('Hello Song!');
$('.title').addClass('Welcome');

console.log($.html())