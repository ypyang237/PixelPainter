'use strict';

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser')
      ;

var currImage;


app
  .use(express.static('public'));

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json());


app.post('/image', function(req, res) {
  currImage = req.body;
  res.send('successPost');
  });

app.get('/image', function(req, res) {
  res.send(currImage);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started listening at 3000');
});
