var express = require('express');
var router = express.Router();

var user = require('./user');
var offer = require("./offer");
let lookups = require("./lookups");


router.post('/login', user.login);

//Offer Endpoints
router.get('/offer', offer.getOffers );
router.get('/offer/:id', offer.getOfferDetails);

router.post('/offer', offer.createOffers );

router.get('/lookups', lookups.getQualtype );

//From this point onwards, the user will have to be authenticated to access other routers listed below.
router.use(user.authenticate);


router.get('/', (req, res) => {
    res.status(201).json({message:'Welcome to authenticated routes'});
});

//User Endpoints
router.get('/user/:id', user.getUserDetails);
router.put('/user/:id', user.updateUser);
router.put('/password/:id',user.updatePassword);

//Offer Endpoints
router.get('/offer', offer.getOffers );
router.get('/offer/:id', offer.getOfferDetails);


module.exports = router;
