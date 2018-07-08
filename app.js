var express = require('express');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var user = require('./routes/user.js');

/**
 * JM setups beyond initial scaffolding start
 */

var apiRoutes = require('./routes/api');
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var deploymentParams = require('./config/deploymentParams');

mongoose.connect(deploymentParams.mongodb.dburi, (err) => {
   if(err){
    console.log('Error connecting to mongodb' + err);
   }else{
     console.log('Connected to mongodb');
   }
});
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

/**
 * JM setups beyond initial scaffolding End
 */
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type : '*/*' }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/**
 * JM Addition Start
 */
// Enable CORS from client-side
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});
/**
* JM Addition End
*/

app.get('/', function(req, res){
  res.send("REST server running at http://localhost:3000");
});
/**
 * JM Routes Start
 */
app.post('/register', user.signup);
app.use('/api', apiRoutes);

/**
* JM Routes End
*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
