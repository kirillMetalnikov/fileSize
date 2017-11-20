// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer();

app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/", upload.single(), function (req, res) ) {
  console.log(req.file)
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({size: req.file.size}));
}

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
