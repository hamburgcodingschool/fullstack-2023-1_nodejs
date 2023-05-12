const db = require("../databases/db");
const urlUtilities = require("../services/urlUtilities");

function getCities(req, res) {
    let limit  = 20;
    let offset = 0;

    if (req.query.limit) {
        limit = parseInt(req.query.limit);
    } 

    if (req.query.offset) {
        offset = parseInt(req.query.offset);
    }

    db.getCitiesCount(function(citiesCount) {
        
        db.getCities(limit, offset, function(result) {
            
            const nextURL = urlUtilities.createNextURL("cities", citiesCount, limit, offset);
            const prevURL = urlUtilities.createPreviousURL("cities", citiesCount, limit, offset);

            const responseJSON = {
                count: citiesCount,
                next: nextURL,
                previous: prevURL,
                results: result
            }

            res.json(responseJSON);

        });
    });
}

function getCitiesByCountry(req, res) {
    const countryCode = req.params.countryCode;

    let limit  = 20;
    let offset = 0;

    if (req.query.limit) {
        limit = parseInt(req.query.limit);
    } 

    if (req.query.offset) {
        offset = parseInt(req.query.offset);
    }

    db.getCitiesCount(function(citiesCount) {
        
        db.getCitiesByCountry(countryCode, limit, offset, function(result) {
            
            const nextURL = urlUtilities.createNextURL("cities/" + countryCode, citiesCount, limit, offset);
            const prevURL = urlUtilities.createPreviousURL("cities/" + countryCode, citiesCount, limit, offset);

            const responseJSON = {
                count: citiesCount,
                next: nextURL,
                previous: prevURL,
                results: result
            }

            res.json(responseJSON);

        });
    });
}

function postCity(req, res) {
    res.send("This works");
}

function deleteCity(req, res) {
    res.send("This works");
}

module.exports = {
    getCities,
    getCitiesByCountry,
    postCity,
    deleteCity
}