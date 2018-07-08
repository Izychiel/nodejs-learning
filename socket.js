const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

app.use(express.static('public'));

/*.get('/', function (req, res) {	// TRY WITH SOCKET
	res.setHeader('Content-Type', 'text/html');
	res.render('socket.ejs');
	res.end();
});
io.sockets.on('connection',function (socket) {	// CONSOLE MSG ON CONNECT
	console.log('New viewer');
	socket.emit('message', 'Hello');
});*/

// ADD CLEARCHAT AND DATE
let messages = [];
let pseudosMsg = [];
let datesMsg = [];

app.get('/chat',function (req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.render('chat.ejs');
	res.end();
})
.use(function (req,res,next) {
	res.redirect('/chat');
});
io.sockets.on('connection',function (socket) {
	socket.on('login',function (pseudo) {	// SEND THE NEW USER
		pseudosMsg.push(pseudo);
		messages.push('|' + pseudo + '|');
		socket.broadcast.emit('login', pseudo);
		socket.emit('msglog', {'pseudos': pseudosMsg, 'messages': messages});
	});
	socket.on('chat',function (message) {	// SENDING MSG TO OTHERS
		pseudosMsg.push(message['pseudo']);
		messages.push(message['message']);
		datesMsg.push(message['date']);
		socket.broadcast.emit('chat', {'pseudo': message['pseudo'], 'message': message['message'], 'date': message['date']});
	});
/*	socket.on('command',function (message) {	// COMMANDS
		if(/^\/.+/.test(message['message'])) {	// ADDING COMMANDS
			if (message['message'] === '/clearchat') {
				messages = [];
				pseudosMsg = [];
				socket.broadcast.emit('command', 'clearchat');
			}
		}
	});*/
});