const express = require('express');
const app = express();

app.get('/', function (req, res) {	// HOME
	res.setHeader('Content-Type', 'text/plain');
	res.send('Accueil')
})

.get('/user/:pseudo',(req, res) => {
	res.setHeader('Content-Type', 'text/plain');
	res.send(req.params.pseudo);	// A PARAMETER FROM URL
})

.get('/ejs/:val', function (req, res) {
	res.setHeader('Content-Type', 'text/html');

	const allVal = req.params.val.split('&');
	res.render('ejstest.ejs', {val: allVal});
})

// 404 PAGE
.use((req, res, next) => {	// A CERTAIN FORM OF FUNCTION
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Not found page')
});

app.listen(8080);