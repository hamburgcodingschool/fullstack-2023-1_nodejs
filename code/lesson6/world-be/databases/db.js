const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "12345678",
    database: "world"
});

function getCountriesCount(callback) {
    const sql = `SELECT COUNT(*) AS countryCount FROM country`;
    connection.query(sql, function(err, result) {
        callback(result[0].countryCount);
    });
}

function getCountries(limit, offset, callback) {
    const sql = `SELECT * FROM country LIMIT ? OFFSET ?`;
    const values = [
        limit,
        offset
    ]
    connection.query(sql, values, function(err, result) {
        callback(result);
    });
}

module.exports = {
    getCountries,
    getCountriesCount
}