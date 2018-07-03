const express = require('express');
const session = require('cookie-session');
const bodyParser = require('body-parser');

const app = express();

app.use(session({secret:'todosecret'}))
	.use(bodyParser.urlencoded({extended: false}))

.get('/todo', (req, res) => {	// CHARGE THE TODO LIST
	res.setHeader('Content-Type','text/html');

	res.render('todo-list.ejs', {session: req.session});
	res.end();
})

.post('/todo/add',function (req, res) {	// ADDING A TODO
	res.setHeader('Content-Type', 'text/plain');

	req.session[req.session.length] = req.body.value;
	res.end();
})

.get('/todo/del/:id',function (req, res) {	// DELETING A TODO
	res.setHeader('Content-Type', 'text/plain');
	const paramId = parseInt(req.params.id);

	if(paramId !== req.session.length-1){
		for(let i=paramId; i<req.session.length; i++){	// SHIFT ALL VALUES IF IT ISN'T THE LAST ONE
			req.session[i] = req.session[i+1];
		}
		delete req.session[req.session.length-1];
	}else{
		delete req.session[paramId];
	}
	res.end();
})

.use((req, res, next) => {	// 404 PAGE
	res.setHeader('Content-Type','text/html');
	res.status(404);
	res.render('todo-404.ejs', {path: req.originalUrl, session: req.session});
	res.end();
});

app.listen(8080);