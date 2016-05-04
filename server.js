'use strict';

const express = require('express'),
      app = express(),
      bodyParser = require('body-parser');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pixelpainter');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  console.log('connected to mongoose');
});

var paintSchema = mongoose.Schema({
  name: String,
  imageState: String
});

var Image = mongoose.model('Image', paintSchema);


var currImage;


app
  .use(express.static('public'));

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json());


app.post('/image', function(req, res) {
  currImage = req.body;


  console.log('req.body.imageState', req.body.imageState);
  console.log('req.body.name', req.body.name);
  //saving to database
    var image = new Image({
      name: req.body.name,
      imageState: req.body.imageState
    });

    image.save(function(err, data) {
      if(err) {
        res.send(err); //err is from the database
      }
      else {
        res.send(data); //data is fromthe database
      }
    });
  });

app.get('/image', function(req, res) {

  res.send(currImage);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started listening at 3000');
});
