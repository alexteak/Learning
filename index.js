const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var _ = require('underscore');
let allowedplayers = 2
let serverside = require("./contents/serverside");
let lastmove = [[],[],[],[],[],[],[]];
let color = 1
let servermove = 1




app.use(express.static('contents'));
app.use(express.static('node_modules/socket.io/client-dist'))
const connections = [null,null]
serverside.setup()

io.on('connection', (socket) => {
	
	socket.emit('color', color);
	color = color * (-1);
	console.log('connection established')
	socket.on('setId', (userId) => {
	if(allowedplayers>0){
	for (index in connections){ if (connections[index] === null){
		connections[index] = userId
		socket.join('' + connections[0])
		console.log('Player %d has joined the room %s', index, connections[0])
		console.log(allowedplayers)
		allowedplayers --
		break
	} }
	}else{console.log('User 3 tried to connect to full room. Aborting')}
})

socket.on('gamestep',(matrix, column) =>{
	servermove = servermove * -1
if (serverside.checklegit(lastmove, matrix, column) == false){console.log('move unlegit')}else{
	io.emit('movemade', matrix, servermove)
	let a = serverside.checkcol(matrix)
	let b = serverside.checkline(matrix)
	let c = serverside.checkdiagleft(matrix)
	let d = serverside.checkdiagright(matrix)
	if (a != undefined){io.emit('win',a)
	lastmove = [[],[],[],[],[],[],[]];
	color = 1
	servermove = 1
	serverside.res()}
	if (b != undefined){io.emit('win',b)
	lastmove = [[],[],[],[],[],[],[]];
	color = 1
	servermove = 1
	serverside.res()}
	if (c != undefined){io.emit('win',c)
	lastmove = [[],[],[],[],[],[],[]];
	color = 1
	servermove = 1
	serverside.res()}
	if (d != undefined){io.emit('win',d)
	lastmove = [[],[],[],[],[],[],[]];
	color = 1
	servermove = 1
	serverside.res()}
	}
})

});



 

server.listen(3000, () => {
  console.log('listening on *:3000');
});