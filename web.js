var buf = new Buffer(250);
var string;
var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
buf =  fs.readFileSync('~/HW3/bitstarter/index.html', 'utf-8');
string = buf.toString('utf8', 0, buf);
response.send (string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
