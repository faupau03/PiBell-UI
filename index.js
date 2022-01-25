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
  config.webrtc_ip = process.env.WEBRTC_IP;
}
if (process.env.WEBRTC_PORT) {
  config.webrtc_port = process.env.WEBRTC_PORT;
}
if (process.env.VIDEO_IP) {
  config.video_ip = process.env.VIDEO_IP;
}
if (process.env.VIDEO_PORT) {
  config.video_port = process.env.VIDEO_PORT;
}
if (process.env.UI_PORT) {
  config.ui_port = process.env.UI_PORT;
}
if (process.env.UI_SSL) {
  config.ui_ssl = process.env.UI_SSL;
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

if (config.ui_ssl == "true" || (typeof(config.ui_ssl) == "boolean" && config.ui_ssl)) {

  const options = {
    key: fs.readFileSync(__dirname + '/ssl/key.pem', 'utf8'),
    cert: fs.readFileSync(__dirname + '/ssl/cert.pem', 'utf8')
  };

  var server = https.createServer(options, app);

  server.listen(config.ui_port);
} 
else {
  console.log("Starting server on port " + config.ui_port);
  app.listen(config.ui_port);
}



