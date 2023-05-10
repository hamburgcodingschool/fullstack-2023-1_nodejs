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
    
    let offset = req.query.offset;
    if (offset <= 0 || !offset) {
        offset = 20;
    }

    db.getCityCount(function(cityCount) {
        db.getCitiesWithLimit (limit, offset, function(result) {
            res.json({
                count: cityCount,
                next: "http://localhost:3000/getCities?offset=20&limit=20",
                previous: null,
                results: result
            });
        });
    });
});


app.listen(port, function() {
    console.log(`Listening on ${port}`);
});