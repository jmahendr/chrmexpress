var mongoose = require( 'mongoose' );
var Offer = require('../models/offer');


exports.getOffereDetails = function(req, res, next){
    Offer.find({id:req.params.id}).exec(function(err, offer){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
        res.status(201).json({
		success: true,
		data: offer
	});
    });
};


exports.getOffers = function(req, res, next) {
  Offer.find({}).exec(function(err, offers){
    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
    res.status(201).json({
      success: true,
      data: offers
    });
  });
};
