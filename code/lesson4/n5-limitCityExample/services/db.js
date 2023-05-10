const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "world"
});

function get10Cities(callback) {
    connection.query("SELECT * FROM city LIMIT 10", function(err, result) {
        // console.log(result);
        callback(result);   
        
    });
}

function getCitiesWithLimit(limit, offset, callback) {
    connection.query(`SELECT * FROM city LIMIT ${limit} OFFSET ${offset}`, function(err, result) {
        callback(result);   
    });
}

function getCityCount(callback) {
    connection.query(`SELECT COUNT(*) AS cityCount FROM city`, function(err, result) {
        const cityCount = result[0].cityCount;
        callback(cityCount);   
    });
}

module.exports = {
    get10Cities,
    getCitiesWithLimit,
    getCityCount
}