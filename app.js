var express = require('express');
var path = require('path');


var routes = require('./routes/index');

var app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


var port = process.env.PORT || '8000';
app.listen(port);


module.exports = app;
