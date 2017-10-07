// set up
var express  = require('express');
var app      = express();                           // create our app w/ express
var morgan = require('morgan');                     // log requests to the console (express4)
var bodyParser = require('body-parser');            // pull information from HTML POST (express4)
var methodOverride = require('method-override');    // simulate DELETE and PUT (express4)
var config = require('./config.json');              // the server's configuration file
var path = require('path');
var async = require('async');

// express configuration
app.use(express.static(__dirname + '/public'));                 // setup the static file root /public/img 
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

//content
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // load the single view file (angular will handle the page changes on the front-end)
});

// listen (start app with node server.js)
app.listen(config.port);
console.log("App listening on port " + config.port);

