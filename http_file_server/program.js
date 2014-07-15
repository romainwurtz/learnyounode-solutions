var http = require('http');
var fs = require('fs');

var fileToRead = process.argv[3];
var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
    // Being a good citizen
    res.writeHead(200, {'content-type': 'text/plain'})

    var fsStream = fs.createReadStream(fileToRead);
    fsStream.pipe(res);
});

server.listen(port);