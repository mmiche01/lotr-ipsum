const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');
const generateText = require('./generateText.js');

const port = process.env.PORT || 3000;

let startPage = fs.readFileSync('./public/index.html', { encoding: 'utf8' });

// Middleware

app.use(express.static('public'));
app.use('/normalize', express.static(path.join(__dirname, 'node_modules/modern-normalize')));
app.use('/img', express.static('img'));
app.use(favicon(__dirname + '/img/favicon.ico'));
app.use(
	'/fontawesome',
	express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free'))
);
app.use(express.urlencoded({ extended: false }));

// Routes

app.get('/', (req, res) => {
	console.log('startPage loaded');
	res.status(200).send(startPage);
});

app.post('/', (req, res) => {
	let loremIpsumText = generateText(req);
	newPage = startPage.replace(
		'<div class="lorem-ipsum-text empty"></div>',
		`<div class="lorem-ipsum-text filled">${loremIpsumText}</div>`
	);
	// why "undefined" appears?? -> Fix
	newPage = newPage.replace('undefined', '');
	res.status(200).send(newPage);
});

// Server

app.listen(port, () => {
	console.log(`Server ist listening on port ${port}`);
});
