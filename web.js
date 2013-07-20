var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
var fs = require('fs');
fs.readFileSync('index.html' , function (err, data) {
  if (err) throw err;
response.send(data);  
}); 

// response.send('Hello World!rakesh');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
