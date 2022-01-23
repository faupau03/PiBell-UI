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

//
//  Set up the server
//

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/public/index.html');
});

app.get("/output.css", (request, response) => {
  response.sendFile(__dirname + '/public/output.css');
});

app.get("/config", (request, response) => {
  response.sendFile(__dirname + '/config.json');
});

//
//  Start the server
//
var server = https.createServer(options, app);

server.listen(443);


//
//  Write environment variables to the config.json file
//
let config_file = fs.readFileSync('config.json');
let config = JSON.parse(config_file);
if (process.env.WEBRTC_IP) {
  config.WEBRTC_IP = process.env.WEBRTC_IP;
}
if (process.env.WEBRTC_PORT) {
  config.WEBRTC_PORT = process.env.WEBRTC_PORT;
}
if (process.env.VIDEO_IP) {
  config.VIDEO_IP = process.env.VIDEO_IP;
}
if (process.env.VIDEO_PORT) {
  config.VIDEO_PORT = process.env.VIDEO_PORT;
}
fs.writeFileSync('config.json', JSON.stringify(config));
