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

function getCitiesCount(callback) {
    const sql = `SELECT COUNT(*) AS cityCount FROM city`;
    connection.query(sql, function(err, result) {
        callback(result[0].cityCount);
    });
}

function getCities(limit, offset, callback) {
    const sql = `SELECT * FROM city LIMIT ? OFFSET ?`;
    const values = [
        limit,
        offset
    ]
    connection.query(sql, values, function(err, result) {
        callback(result);
    });
}

function getCitiesByCountry(countryCode, limit, offset, callback) {
    const sql = `SELECT * FROM city WHERE CountryCode = ? LIMIT ? OFFSET ?`;
    const values = [
        countryCode,
        limit,
        offset
    ]
    connection.query(sql, values, function(err, result) {
        callback(result);
    });
}

module.exports = {
    getCountries,
    getCountriesCount,
    getCities,
    getCitiesCount,
    getCitiesByCountry
}