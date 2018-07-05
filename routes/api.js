var express = require('express');
var router = express.Router();

var user = require('./user');
var offer = require("./offer");


router.post('/login', user.login);

router.get('/offer', offer.getOffers);

router.get('/offer/:id', offer.getOffereDetails);

//From this point onwards, the user will have to be authenticated to access other routers listed below.
router.use(user.authenticate);


router.get('/', (req, res) => {
    res.status(201).json({message:'Welcome to authenticated routes'});
});

router.get('/user/:id', user.getUserDetails);
router.put('/user/:id', user.updateUser);
router.put('/password/:id',user.updatePassword);
module.exports = router;
