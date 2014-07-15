var http = require('http');

http.get(process.argv[2], function(result) {
    result.setEncoding('utf8');
    result.on('error', function (err) {
        console.error(err);
    });
    result.on('data', function (chunk) {
        console.log(chunk);
    });
});