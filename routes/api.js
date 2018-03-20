var express = require('express');
var router = express.Router();

var users = require('./users');

router.get('/', (req, resp, next) => {
    resp.send('ChRM API is running at http://localhost:2000/api');

});

router.post('/login', users.login);

module.exports = router;