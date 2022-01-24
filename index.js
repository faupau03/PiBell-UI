const express = require('express')
const app = express()
const port = 80
const path = require('path')
const https = require('https');
const fs = require('fs');



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
if (process.env.UI_PORT) {
  config.UI_PORT = process.env.UI_PORT;
}
if (process.env.UI_SSL) {
  config.UI_SSL = process.env.UI_SSL;
}


fs.writeFileSync('config.json', JSON.stringify(config));

//
//  Set up the server
//

app.use(express.static(path.join(__dirname, 'public')));

app.get("/manifest.json", (request, response) => {
  response.sendFile(__dirname + '/public/manifest.json');
});

app.get("/config", (request, response) => {
  response.sendFile(__dirname + '/config.json');
});

//
//  Start the server
//

if (config.UI_SSL == "true" || (typeof(config.UI_SSL) == "boolean" && config.UI_SSL)) {

  const options = {
    key: fs.readFileSync(__dirname + '/ssl/key.pem', 'utf8'),
    cert: fs.readFileSync(__dirname + '/ssl/cert.pem', 'utf8')
  };

  var server = https.createServer(options, app);

  server.listen(config.UI_PORT);
} 
else {
  app.listen(config.UI_PORT);
}



