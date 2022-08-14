const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
let allowedplayers = 2



app.use(express.static('contents'));
app.use(express.static('node_modules/socket.io/client-dist'))
const connections = [null,null]


io.on('connection', (a) => {
	console.log('connection established')
});


io.on('setId', (userId) => {
	console.log(userId)
	if(allowedplayers>0){
	for (index in connections){ if (connections[index] === null){
		connections[index] = userId
		allowedplayers -=1
	} }
	}else{socket.emit('full', 'Lobby is full')}
})

 

server.listen(3000, () => {
  console.log('listening on *:3000');
});