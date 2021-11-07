var http = require('http');
var fs = require('fs');

http.createServer(function(request , response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.write('welcome to ndoe js 1232');
    response.end();
}).listen(3000);
console.log('server running at port 3000');