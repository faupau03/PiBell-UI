const express = require('express')
const app = express()
const port = 80
const path = require('path')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public'));

app.get("/", (request, response) => {
  response.render('index.ejs', {
    doorbell_ip: process.env.DOORBELL_IP,
    doorbell_port: process.env.DOORBELL_PORT,
  })
});

app.get("/output.css", (request, response) => {
  response.sendFile(__dirname + '/public/output.css');
});

app.get("/config", (request, response) => {
  response.sendFile(__dirname + '/public/config.json');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})