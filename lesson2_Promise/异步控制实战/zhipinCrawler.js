const request = require('request');
let URL = 'https://www.zhipin.com/chat/geek.json?uid=49140294'
let Cookie = 'lastCity=101010100; _uab_collina=153976423646731548963016; _umdata=55F3A8BFC9C50DDAE4B3D86CD8801075DCC78200FC3A5C61F5D18991E053AE9DE08F1CD3634DB93FCD43AD3E795C914C87E735E22A20A7B8E51B636148DA34BB; JSESSIONID=""; __c=1544079684; __g=-; __l=l=%2Fwww.zhipin.com%2F&r=; Hm_lvt_194df3105ad7148dcf2b98a91b5e727a=1543301160,1543392721,1543827498,1544079684; toUrl=https%3A%2F%2Fwww.zhipin.com%2F; t=WPBrG2h6ahftVhls; wt=WPBrG2h6ahftVhls; __a=43946384.1526264848.1543827498.1544079684.251.26.8.251; Hm_lpvt_194df3105ad7148dcf2b98a91b5e727a=1544170915';
request({
    url: URL,
    headers: {
        'Cookie': Cookie
    }
}, function (err, res, body) {
    if(err){
        console.log(err)
    } else {
        if(res.statusCode == 200){
            console.log(body);
        } else {
            console.log(res.statusCode);
        }
    }
})