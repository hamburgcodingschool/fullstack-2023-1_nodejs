const mysql = require("mysql2");
const express = require("express");
const app = express();

const port = 3000;

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "world"
});

app.get("/", function(req, res) {
    res.send("Hello!");
});

app.get("/about", function(req, res) {
    const data = {
        name: "Bruno",
        height: 177,
        age: 41
    };

    res.json(data);
});

app.get("/cities", function(req, res) {
    const sql = `SELECT * FROM city LIMIT 10`;

    connection.query(sql, function(err, result) {
        res.json(result);
    })
});

app.listen(port, function() {
    console.log(`Listening on ${port}`);
});