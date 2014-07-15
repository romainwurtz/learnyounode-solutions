var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var lines = buf.toString().split("\n").length;
if (lines > 0) lines -= 1;
console.log(lines);