var mongoose = require( 'mongoose' );
var Lookups = require('../models/lookups');
var Sequences = require('../models/sequences');

exports.getQualtype = function(req, res, next) {
  var query = require('url').parse(req.url, true).query;
  Lookups.find({}, {qualtype:1, _id:0}).exec(function(err, lookups){
    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
    res.status(201).send(
      lookups[0].qualtype
    );
  });
};

exports.getNextSequenceValue = function(seqName) {
  var sequenceDocument = Sequences.findByIdAndUpdate({
      query:{_id: seqName },
      update: {$inc:{sequence_value:1}},
      new:true
   });

   return sequenceDocument.sequence_value;
}
