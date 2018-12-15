var exec = require('child_process').exec;

function start() {
    console.log("Request handler 'start' was called.");
    var content = "empty";
    // 耗时任务，模拟阻塞
    exec('tree C:/"Program Files"', {encoding: 'Song', timeout: 10000, maxBuffer: 20000 * 1024}, function (error, stdout, stderr) {
        if(error){
            console.log(error)
        } else {
            content = stdout || stderr;
        }
    })
    return content;
}

function upload() {
    console.log("Request handler 'upload' was called.")
    return "hello upload"
}

exports.start = start;
exports.upload = upload;