const express = require('express');
const app = express();

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.send('Accueil')
});

app.listen(8080);
