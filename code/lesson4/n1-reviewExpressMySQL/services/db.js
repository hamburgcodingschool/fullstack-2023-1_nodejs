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
        console.log(result);
        
        callback(result);
        
    });

}

module.exports = {
    get10Cities
}