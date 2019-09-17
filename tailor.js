'use strict';

const http = require('http');
const url = require('url'); // built-in utility

const Tailor = require('node-tailor');
const tailor = new Tailor({
	maxAssetLinks: 15,
	templatesPath: __dirname,
});
const PORT = 8080;

http
	.createServer((req, res) => {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Request-Method', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
		res.setHeader('Access-Control-Allow-Headers', '*');

		if (req.url === '/') {
			req.headers['x-request-uri'] = req.url;
			console.log('request URL', req.url);
			req.url = '/index';
		}
		tailor.requestHandler(req, res);
	})
	.listen(PORT, function() {
		console.log(`Tailor server listening on port ${PORT}`);
	});
