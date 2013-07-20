var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var data =fs.readFileSync('index.html' ,'utf8');
  
response.send(data.toString());  

// response.send('Hello World!rakesh');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
