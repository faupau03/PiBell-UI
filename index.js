const express = require('express')
const app = express()
const port = 80
const path = require('path')
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync(__dirname + '/ssl/localhost+1-key.pem', 'utf8'),
  cert: fs.readFileSync(__dirname + '/ssl/localhost+1.pem', 'utf8')
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

app.get("/output.css", (request, response) => {
  response.sendFile(__dirname + '/public/output.css');
});

app.get("/config", (request, response) => {
  response.sendFile(__dirname + '/public/config.json');
});


var server = https.createServer(options, app);

server.listen(443);