var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// routes
var index = require('./routes/index');
var add = require('./routes/add');
var subtract = require('./routes/subtract');
var divide = require('./routes/divide');
var multiply = require('./routes/multiply');

//enabling bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/add', add);
app.use('/subtract', subtract);
app.use('/multiply', multiply);
app.use('/divide', divide);

// Static Files
app.use('/', index);

// Set port to listen on
app.set('port', process.env.PORT || 5000);

app.listen(process.env.PORT || 5000);
