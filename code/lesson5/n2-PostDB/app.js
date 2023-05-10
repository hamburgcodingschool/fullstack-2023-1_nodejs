const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "world"
});

const port = 3000;

app.use(express.json());

app.get("/", function(req, res) {
    res.send("Welcome! Use POST to try things out...");
});

app.post("/addContinent", function(req, res) {

    console.log(req.body);
    // data should be sanitized before inserted into a DB
    // and be inserted only via ? and parameters
    
    const sql = `INSERT INTO continents VALUES (NULL, ?, ?)`;
    const values = [
        req.body.name,
        req.body.area
    ];

    connection.query(sql, values, function(err, result) {
        if (err) {
            console.log(err);
            res.json(err);
            // res.status(500).send("Internal Server Error");
        }
        console.log(result);
        res.json(result);
    });
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});