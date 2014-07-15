var customModule = require('./program-module.js');

customModule(process.argv[2], process.argv[3], function(err, list) {
    if (err) return console.error(err);
    list.forEach(function (file) {
        console.log(file);
    });
});