var http = require('http');
var bl = require('bl')

http.get(process.argv[2], function(result) {
    result.pipe(bl(function (err, data) {
        if (err) return console.error(err);
        var string = data.toString();
        console.log(string.length);
        console.log(string);
    }))
});