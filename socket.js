const express = require('express');
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(8080);

app.use(express.static('public'))

.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/html');
	res.render('socket.ejs');
	res.end();
});

io.sockets.on('connection',function (socket) {
	console.log('New viewer');
	socket.emit('message', 'Hello');
});