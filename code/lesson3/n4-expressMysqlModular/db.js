const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "world"
});

// httpResponseObject is what I decided to call the res variable in this context
function getTenCitiesBad(httpResponseObject) {
    const sql = `SELECT * FROM city LIMIT 10`;
    connection.query(sql, function(err, result) {
        httpResponseObject.json(result);
    });
}

// receive a callback function,
// so you can execute it (call it) and pass the result as a parameter
function getTenCitiesGood(callback) {
    const sql = `SELECT * FROM city LIMIT 10`;
    connection.query(sql, function(err, result) {
        callback(result);
    });
}

module.exports = {
    getTenCitiesBad,
    getTenCitiesGood
}