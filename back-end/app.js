"use strict"

var express =require("express");
var bodyParser = require("body-parser");

var app = express();

var project_routes = require("./routes/project");

// middlewares
app.use(bodyParser.urlencoded({exteded:false}));
app.use(bodyParser.json());

// CORS

//rutas
    app.use("/api", project_routes);
//exportar
module.exports = app;