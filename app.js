const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon');

let pageFile = fs.readFileSync('./public/index.html');

app.use(express.static('public'));
app.use('/normalize', express.static(path.join(__dirname, 'node_modules/modern-normalize')));
app.use(
	'/fontawesome',
	express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css'))
);
app.use('/img', express.static('img'));
app.use(favicon(__dirname + '/img/favicon.ico'));

app.get('/', (req, res) => {
	res.status(200).sendFile(pageFile);
});

app.listen(5500, () => {
	console.log('Server ist listening on port 5500');
});
