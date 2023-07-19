const express = require("express");
const app = express();

const destinationService = require("./services/destinationService");

const port = 3000;

app.get("/api", function(req, res) {
    
    // res.setHeader("content-type", "application/json");
    // res.send(JSON.stringify("Welcome to the Travel Blog API"));

    res.json("Welcome to the Travel Blog API");
});

app.get("/api/destinations", function(req, res) {
    const result = destinationService.getAllDestinations();
    
    res.json(result);
});

app.get("/api/destinations/:destinationId", function(req, res) {
    const id = Number(req.params.destinationId);
    
    const result = destinationService.getDestinationById(id);
    
    if (result) {
        res.json(result);
    } else {
        res.status(404);
        res.end();
    } 
});

app.delete("/api/destinations/:destinationId", function(req, res) {
    const id = Number(req.params.destinationId);

    const result = destinationService.deleteDestinationById(id);
    if (result) {
        res.json({
            id: id,
            message: "Deleted succesfully"
        })
    } else {
        res.status(404);
        res.end();
    }
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});
