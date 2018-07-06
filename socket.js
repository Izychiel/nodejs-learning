const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

app.use(express.static('public'))

.get('/', function (req, res) {	// TRY WITH SOCKET
	res.setHeader('Content-Type', 'text/html');
	res.render('socket.ejs');
	res.end();
});
io.sockets.on('connection',function (socket) {	// CONSOLE MSG ON CONNECT
	console.log('New viewer');
	socket.emit('message', 'Hello');
});


app.get('/chat',function (req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.render('chat.ejs');
	res.end();
});
io.sockets.on('connection',function (socket) {
	socket.on('login',function (pseudo) {	// SEND THE NEW USER
		socket.broadcast.emit('login', pseudo);
	});
	socket.on('chat',function (message) {	// SENDING MSG TO OTHERS
		socket.broadcast.emit('chat', {'pseudo': message['pseudo'], 'message': message['message']});
	})
});