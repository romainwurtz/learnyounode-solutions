var fs = require('fs');
var path = require('path');

module.exports = function (dirPath, fileFilter, callback) {
    fs.readdir(dirPath, function (err, list) {
        if (err) return callback(err);
        var listMatch = [];
        var ext = '.' + fileFilter;
        list.forEach(function (file) {
            if (path.extname(file) === ext) {
                listMatch.push(file);
            }
        });
        return callback(null, listMatch);
    })
}