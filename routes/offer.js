var mongoose = require( 'mongoose' );
var Offer = require('../models/offer');


exports.getOfferDetails = function(req, res, next){
    Offer.find({id:req.params.id}).exec(function(err, offer){
        if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
        /*
        res.status(201).json({
      		success: true,
      		data: offer
      	});
        */
        res.status(200).send(offer);
    });
};


exports.getOffers = function(req, res, next) {
  var query = require('url').parse(req.url, true).query;
  var name = query.name;
  Offer.find(query).exec(function(err, offers){
    if(err){ res.status(400).json({ success: false, message: 'Error processing request '+ err}); }
    res.status(201).send(
      //{
      //success: true,
      //data: offers
      //}
      offers
    );
  });
};
