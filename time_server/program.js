var net = require('net');

function zeroPadding(nb) {
    return (nb < 10) ? ('0' + nb) : (nb);
}

function formatDate(date) {
    return date.getFullYear()
        +'-'+zeroPadding((date.getMonth() + 1))
        +'-'+zeroPadding(date.getDate())
        +' '+zeroPadding(date.getHours())
        +':'+zeroPadding(date.getMinutes());
}

var server = net.createServer(function(socket) {
    var date = new Date();
    socket.end(formatDate(date) + '\n');
});

server.listen(Number(process.argv[2]));