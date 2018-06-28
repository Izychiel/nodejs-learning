const express = require('express');
const app = express();

app.get('/', function (req, res) {	// HOME
	res.setHeader('Content-Type', 'text/plain');
	res.send('Accueil')
});

// 404 PAGE
app.use((req, res, next) => {	// A CERTAIN FORM OF FUNCTION
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Unfound page')
});

app.listen(8080);