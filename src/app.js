"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var data_source_1 = require("./data-source");
var routes_1 = require("./routes");
data_source_1.AppDataSource.initialize().then(function () {
    var app = express();
    app.use(cors({
        origin: ['http://localhost:3000', 'http://localhost:8080']
    }));
    app.use(express.json());
    new routes_1.Routes().setApp(app);
    console.log('Listening to port: http://localhost:8080');
    app.listen(8080);
})
    .catch(function (error) { return console.log(error); });
