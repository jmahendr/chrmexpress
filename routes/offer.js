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
  //comment: https://stackoverflow.com/questions/19491336/get-url-parameter-jquery-or-how-to-get-query-string-values-in-js?rq=1

  let q = {};
  if(query.name)
  {
    let nameRegexp = new RegExp( query.name);
    q.name = nameRegexp;
  }
  console.log(q);
  Offer.find(q).exec(function(err, offers){
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


exports.createOffer = function(req, res, next) {
  Offer.create(req.body, function(err, offer){
    if(err) {
      res.status(500).send("Error processing request.");
      next();
    } else {
      res.status(201).send( offer);
    }
  }); 
};
