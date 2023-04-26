const express = require("express");
const app = express();

const port = 3000;

let homeCounter = 0;
let aboutCounter = 0;

app.get("/", function(req, res) {
    homeCounter++;
    res.send(`This route has been requested ${homeCounter} time(s)`);
});

app.get("/about", function(req, res) {
    aboutCounter++;
    res.send(`This route has been requested ${aboutCounter} time(s)`);
});

app.get("/api", function(req, res) {
    const data = {
        result: "ok",
        value: 123,
        data: [
            {
                name: "Bruno",
                height: "tall enough",
                city: "Porto"
            },
            {
                name: "Sandra",
                height: 184,
                city: "Hamburg"
            },
            {
                name: "Helder",
                height: 180,
                city: "Porto"
            },
        ]
    };
    // res.send(JSON.stringify(data));
    res.json(data);
});

// 1 - make the / route work
// 2 - add 3 more routes and play around with the browser and the server

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});

// HOMEWORK
// 1 - Review the Node.JS code from today, make sure you understand the concepts and ask questions on Monday
//
// 2 - create a HTML page, that lists all pokemons from the Pokemon Api
//      https://pokeapi.co