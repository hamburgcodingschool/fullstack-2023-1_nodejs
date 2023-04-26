const express = require("express");
const port = 3000;

const app = express();

app.get("/", function(req, res) {
    console.log("A REQUEST AS MADE to /");

    res.send("HELLO HERE IS YOUR HTTP RESPONSE...");
});

app.get("/lalala", function(req, res) {
    console.log("A REQUEST AS MADE to lalala");

    res.send("You have requested the lalala route, good for you 😎");
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});