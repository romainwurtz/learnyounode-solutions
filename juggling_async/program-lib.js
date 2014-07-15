var http = require('http');
var bl = require('bl');
var async = require('async');

var listUrls = process.argv.slice(2);
var resultData = [];

function displayResult() {
    listUrls.forEach(function(url) {
        console.log(resultData[url]);
    });
}

function doRequest(url, callback) {
    http.get(url, function(result) {
        result.pipe(bl(function (err, data) {
            if (err) return callback(err);
            resultData[url] = data.toString();
            return callback();
        }))
    });
}

async.each(listUrls, doRequest, function(err){
    if (err) return console.error(err);
    displayResult();
});