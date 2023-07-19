const express = require("express");
const app = express();

const destinationService = require("./services/destinationService");

const port = 3000;

app.get("/api", function(req, res) {
    res.json("Welcome to the Travel Blog API");
});

app.get("/api/destinations", function(req, res) {
    const result = destinationService.getAllDestinations();
    
    res.json(result);
});

app.get("/api/destinations/:destinationId", function(req, res) {
    const id = Number(req.params.destinationId);
    
    const result = destinationService.getDestinationById(id);
    
    res.json(result);
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
