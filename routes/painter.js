'use strict';

const express = require('express'),
      router = express.Router(),
      paintSchema = require('../server')
      ;

router.route('/image')
  .post(function(req, res) {

    // var image = new paintSchema({
    //   // name: req.body.name
    //   imageState: req.body.imageInstructions
    // })
  })