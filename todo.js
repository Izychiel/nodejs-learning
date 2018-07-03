const express = require('express');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const app = express();

app.use(session({secret:'todosecret'}))
	.use(bodyParser.urlencoded({extended: false}))
	.use(function (req, res, next) {
		if(typeof(req.session.todolist) === 'undefined'){
			req.session.todolist =[];
		}
		next();
	})

.get('/todo', (req, res) => {	// CHARGE THE TODO LIST
	res.setHeader('Content-Type','text/html');

	res.render('todo-list.ejs', {todolist: req.session.todolist});
	res.end();
})

.post('/todo/add',function (req, res) {	// ADDING A TODO
	res.setHeader('Content-Type', 'text/plain');

	req.session.todolist[req.session.todolist.length] = req.body.value;
	res.end();
})

.get('/todo/del/:id',function (req, res) {	// DELETING A TODO
	res.setHeader('Content-Type', 'text/plain');
	const paramId = parseInt(req.params.id);

	req.session.todolist.splice(paramId, 1);	// DELETING IT
	res.end();
})

.use((req, res, next) => {	// 404 PAGE
	res.setHeader('Content-Type','text/html');
	res.status(404);
	res.render('todo-404.ejs', {path: req.originalUrl, session: req.session});
	res.end();
});

app.listen(8080);