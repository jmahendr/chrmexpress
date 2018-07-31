var mongoose = require( 'mongoose' );
var Lookups = require('../models/lookups');
var Sequences = require('../models/sequences');

exports.getQualtype = function(req, res, next) {
  var query = require('url').parse(req.url, true).query;
  Lookups.find({}, {_id:0, qualtype:1, offertype: 0, offerstatus: 0}).exec(function(err, lookups){
    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
    res.status(201).send(
      lookups[0].qualtype
    );
  });
};

exports.getSeedData = function(req, res, next) {
  var query = require('url').parse(req.url, true).query;
  Lookups.find({}, { _id:0, qualtype:1, offertype:1, offerstatus:1}).exec(function(err, lookups){
    if(err){ res.status(500).send('Error processing request ' + err); }
    res.status(201).send(
      lookups[0]
    );
  });
};