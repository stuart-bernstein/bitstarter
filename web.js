var express = require('express'), fs=require("fs");

var app = express.createServer(express.logger());
var content=fs.readFileSync("index.html");  //returns a buffer because no encoding
//var buf = new Buffer(content);

app.get('/', function(request, response) {
  response.send(content.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});