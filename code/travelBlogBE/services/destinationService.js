const destinationData = require("./destinations.json");

function getAllDestinations() {
    const resultData = [];
    for (let i = 0; i < destinationData.length; i++) {
        const fullDestination = destinationData[i];
        const newInfo = {
            id: fullDestination.id,
            title: fullDestination.titel,
            url: "/api/destinations/" + fullDestination.id
        }
        resultData.push(newInfo);
    }
    return resultData;
}

function getDestinationById(id) {
    for (let i = 0; i < destinationData.length; i++) {
        const fullDestination = destinationData[i];
        if (fullDestination.id === id) {
            return fullDestination;
        }
    }
    return undefined;
}

function deleteDestinationById(id) {
    let indexToDelete;
    
    for (let i = 0; i < destinationData.length; i++) {
        const fullDestination = destinationData[i];
        if (fullDestination.id === id) {
            indexToDelete = i;        
        }
    }

    if (indexToDelete) {
        destinationData.splice(indexToDelete, 1);
        return true;
    } else {
        return false;
    }
}

module.exports = {
    getAllDestinations,
    getDestinationById,
    deleteDestinationById
}