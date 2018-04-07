'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('./config'),
server       = express(),
mongoose     = require('mongoose'),
//created models loading here
TeamInfo     = require('./API/Models/TeamInfo'), 
GameSchedule = require('./API/Models/GameSchedule');
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUrl, (err, res) => {
	if (err) throw err
    console.log("Database connection")
});
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//importing route
var routes = require('./API/Routes/Routes'); 
//register the route
routes(server);
//defining the port for localhost or deployment 
var port = process.env.PORT || 3000;
server.listen((port), function () {
    console.log("Server is up and listening on port " + port);
    // console.log(mongoose.connection.readyState);
});