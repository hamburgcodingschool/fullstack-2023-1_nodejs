const db = require("../databases/db");
const urlUtilities = require("../services/urlUtilities");

function getCountries(req, res) {
    let limit  = 20;
    let offset = 0;

    if (req.query.limit) {
        limit = parseInt(req.query.limit);
    } 

    if (req.query.offset) {
        offset = parseInt(req.query.offset);
    }

    db.getCountriesCount(function(countriesCount) {
        
        db.getCountries(limit, offset, function(result) {
            
            const nextURL = urlUtilities.createNextURL("countries", countriesCount, limit, offset);
            const prevURL = urlUtilities.createPreviousURL("countries", countriesCount, limit, offset);

            const responseJSON = {
                count: countriesCount,
                next: nextURL,
                previous: prevURL,
                results: result
            }

            res.json(responseJSON);

        });
    });
}

function postCountry(req, res) {
    res.send("This works");
}

function deleteCountry(req, res) {
    res.send("This works");
}

module.exports = {
    getCountries,
    postCountry,
    deleteCountry
}