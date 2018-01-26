//Dependencies
var apiRoutes = require('./routes/apiRoutes.js');
var htmlRoutes = require('./routes/htmlRoutes.js');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Express App
var app = express();
var PORT = process.env.PORT || 3000;

apiRoutes(app);
htmlRoutes(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});