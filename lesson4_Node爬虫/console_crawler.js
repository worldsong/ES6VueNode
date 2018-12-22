// 靶站：http://songfens.club/users?page=1

// 元素选择器拿到单个元素的信息
// $('#users-container > li:nth-child(4) > div > span > a')[0].text
// $$ 等同于 document.querySelectorAll

// 多个元素的获取
var items = document.querySelectorAll('#users-container > li> div > span > a');
for(var i=0; i < items.length; i++){
    console.log(items[i].text);
    var href = items[i].getAttribute('href');  // 属性值 /user/bryandox
    var name = href.substr(6, href.length);
    var nameSun = href.split('/').pop();
    var nameB = href.replace("/user/", "")
    console.log(name);
}