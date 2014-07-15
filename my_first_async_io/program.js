var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) return console.error(err);
    var length = data.toString().split("\n").length;
    if (length > 0) length -= 1;
    console.log(length);
});