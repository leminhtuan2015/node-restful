var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var mysql =  require("mysql");
var database = require("./config/database");
var mongoConnection = mongoose.connect(database.mongo.db);
var mysqlConnection =  mysql.createConnection(database.mysql);

require("./routes/routes")(router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(router);

module.exports = app
