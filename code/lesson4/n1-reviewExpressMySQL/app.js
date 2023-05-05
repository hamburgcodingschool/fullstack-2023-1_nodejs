const db = require("./services/db");

const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {
    db.get10Cities ( function(result) {
        res.json(result);
    } );
});


app.listen(port, function() {
    console.log(`Listening on ${port}`);
});