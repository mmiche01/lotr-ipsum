const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const generateText = require('./generateText.js');

let startPage = fs.readFileSync('./public/index.html', { encoding: 'utf8' });

app.use(express.static('public'));
app.use('/normalize', express.static(path.join(__dirname, 'node_modules/modern-normalize')));
app.use('/img', express.static('img'));
app.use(favicon(__dirname + '/img/favicon.ico'));
app.use(
	'/fontawesome',
	express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css'))
);

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	console.log('startPage');
	res.status(200).send(startPage);
});

app.post('/', (req, res) => {
	let loremIpsumText = generateText(req);
	newPage = startPage.replace(
		'<div class="lorem-ipsum-text">',
		'<div class="lorem-ipsum-text">' + loremIpsumText
	);
	res.status(200).send(startPage);
});

app.listen(5500, () => {
	console.log('Server ist listening on port 5500');
});
