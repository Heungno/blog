/*
 * 간단 채팅 
 */

var socket_io = require('socket.io');

var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on('connection', function (socket) {
  socket.on('chat message', function(data){
    io.emit('chat message', data);
    console.log('message: ' + JSON.stringify(data));
  });
});


module.exports = socketApi;