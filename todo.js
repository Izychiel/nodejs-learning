const express = require('express');
const app = express();

app.get('/todo',function (req, res) {
	res.setHeader('Content-Type','text/html');
	res.render('todo-list.ejs')
})

.post('/todo/add',function (req, res) {

})

.post('/todo/del/:id',function (req, res) {

})

.use(function (req, res, next) {
	res.setHeader('Content-Type','text/html');
	res.status(404);
	res.render('todo-404.ejs', {path: req.originalUrl})
});

app.listen(8080);