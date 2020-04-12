var http = require('http');
var dt = require('./2');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("current date & time from Litu's PC" + dt.myDateTime()+ "\n\n");
  res.write(req.url); 	
  res.end('Hi This is pradyumna!');
}).listen(8080)