var express = require('express');
var app = express();
let port = process.env.PORT || 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/test', function(req, res) {
  res.send('hello world');
});

app.listen(port,()=>console.log(`CORRIENDO`))