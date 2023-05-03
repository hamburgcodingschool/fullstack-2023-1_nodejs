const db = require("./db");

const express = require("express");
const app = express();

const port = 3000;

app.get("/badway", function(req, res) {

    db.getTenCitiesBad(res);
    
});

app.get("/goodway", function(req, res) {
    db.getTenCitiesGood(function(cities) {
        res.json(cities);
    });
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});