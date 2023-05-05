const db = require("./services/db");

const express = require("express");
const cors = require("cors");
const app = express();

const port = 3000;

app.use(cors());

app.get("/get10Cities", function(req, res) {
    db.get10Cities ( function(result) {
        res.json(result);
    } );
});

app.get("/getCities", function(req, res) {
    let limit = req.query.limit;
    if (limit <= 0 || !limit) {
        limit = 20;
    }
    db.getCitiesWithLimit (limit, function(result) {
        res.json(result);
    } );
});


app.listen(port, function() {
    console.log(`Listening on ${port}`);
});