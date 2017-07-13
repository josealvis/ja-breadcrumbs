
var fs = require('fs');
var index = fs.readFileSync('examples/index.html');

var express = require('express');
var app = express();

app.use('/', express.static(__dirname + '/examples/'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
