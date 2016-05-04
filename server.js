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
  imageInstructions: String
});

var Hawaii = mongoose.model('Hawaii', paintSchema);


var currImage;


app
  .use(express.static('public'));

app
  .use(bodyParser.urlencoded({extended: true}))
  .use(bodyParser.json());


app.post('/image', function(req, res) {
  currImage = req.body;
  res.send('successPost');

  //saving to database
    var image = new Hawaii({
      imageState: req.body.imageInstructions
    });

    image.save(function(err, image) {
      if(err) {
        return console.error(err);
      }


    })
  });

app.get('/image', function(req, res) {

  res.send(currImage);
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server started listening at 3000');
});
