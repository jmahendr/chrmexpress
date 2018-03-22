var express = require('express');
var router = express.Router();
var users = require('./users');
var offers = require('./offers');

router.get('/', (req, resp, next) => {
    resp.send('ChRM API is running at http://localhost:2000/api');

});

router.post('/login', users.login);

//From this point onwards, all api routes should be authenticated.
router.use(users.authenticate);



router.get('/offers', offers.getOffers);



module.exports = router;