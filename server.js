// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer');
var upload = multer();
var size = {}
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/", upload.single("file"), function (req, res) {
  console.log(req.file);
  size = {size: req.file.size}
  res.redirect('/file-size')

})

app.get("/file-size", function(req, res){
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(size));  
})
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
