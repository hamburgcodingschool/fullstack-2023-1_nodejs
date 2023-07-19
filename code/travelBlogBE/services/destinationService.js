const destinationData = require("./destinations.json");

function getAllDestinations() {
    return [1, 2, 3, 4, 5, 6];
}

function getDestinationById(id) {
    return {
        data: "you will see " + id + " here"
    }
}

module.exports = {
    getAllDestinations,
    getDestinationById
}