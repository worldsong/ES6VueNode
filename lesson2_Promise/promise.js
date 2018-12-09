// 煮开水
var boilWater = function(){
   return new Promise(function(resolve){
       setTimeout(function(){
           console.log('boilWater')
           resolve('boilWater')
       }, 10 * 1000); // 10秒钟
   })
}

// 洗杯子
var washGlass = function(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('washGlass')
            resolve('washGlass')
        }, 2 * 1000); // 2秒钟
    })
}

// 准备茶叶
var prepareTeaLeaves = function(){
    return new Promise(function(resolve){
        setTimeout(function () {
            console.log('prepareTeaLeaves')
            resolve('prepareTeaLeaves')
        }, 1 * 1000); // 1秒钟
    })
}
console.time('promise')
boilWater()
.then(function () {
    return washGlass()
})
.then(function () {
    return prepareTeaLeaves()
})
.then(function () {
    console.timeEnd('promise');
})