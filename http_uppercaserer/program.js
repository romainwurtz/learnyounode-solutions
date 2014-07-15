var http = require('http');
var map = require('through2-map');

var port = Number(process.argv[2]);

var server = http.createServer(function (req, res) {
    if (req.method != 'POST') return res.end('Not a POST request.\n');
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port);