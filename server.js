/**
 * Created by jonathanmar on 1/1/17.
 */

var hostname = '0.0.0.0';
var port = process.env.PORT || 3000;
var express = require('express');
var app = express();
app.use(express.static(__dirname));

var http = require('http');
var server = http.Server(app);
var io = require('socket.io')(server);

//var io = require('socket.io')({
//    transports  : [ 'websocket' ]
//});

//io(server);

app.get('/', function(req, res){
    res.sendfile('index.html');
});



server.listen(port, hostname, function(){
    console.log('listening on ' + hostname + ':' + port);
});

