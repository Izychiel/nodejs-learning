const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
	const page = url.parse(req.url).pathname;

	res.writeHead('200', {"Content-Type": "text/plain"});

	// REDIRECT TO MANY PAGES
	if(page === '/' || page === '/index'){
		res.write('acceuil');
	}else if (page === '/page'){
		res.write('page');
	}else{	// 404 PAGE
		res.writeHead('404');
		res.write('Inconnu');
	}
	res.end()
});
server.listen(8080);