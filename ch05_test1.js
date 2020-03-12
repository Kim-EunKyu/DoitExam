var http = require('http');

var server = http.createServer();

var host = 'localhost';
var port = 3000;
server.listen(port, function(){
    console.log('webserver : %d ', port)
});
