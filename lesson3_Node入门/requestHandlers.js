function start() {
    console.log("Request handler 'start' was called.");
    function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while(new Date().getTime() < startTime + milliSeconds);
    }
    sleep(15000);
    return "Hello start."
}

function upload() {
    console.log("Request handler 'upload' was called.")
    return "hello upload"
}

exports.start = start;
exports.upload = upload;