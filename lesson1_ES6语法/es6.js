var url = 'http://songfens.club:3000/goods/list?page=1&pageSize=8&sort=1&priceLevel=all'
var getJSON = function (url) {
    var promise = new Promise(function (resolve, reject) {
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
            if(this.readyState !== 4) {
                return
            }
            if(this.status === 200){
                resolve(this.response)
            } else {
                reject(new Error(this.statusText));
            }
        }
    });
    return promise;
}

getJSON(url)
.then(function(json){
    console.log(json);
    return json.result
})
.then(result => console.log(result.count))
.catch(error => console.log(error))