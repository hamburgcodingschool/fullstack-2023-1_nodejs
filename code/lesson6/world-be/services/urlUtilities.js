const baseURL = `http://localhost:3000/api`;

function createNextURL(endpoint, count, limit, offset) {

    const newOffset = offset + limit;
    
    if (newOffset >= count) {
        return null;
    }

    return `${baseURL}/${endpoint}?limit=${limit}&offset=${newOffset}`;
}

function createPreviousURL(endpoint, count, limit, offset) {
    
    const newOffset = offset - limit;
    
    if (offset === 0) {
        return null;
    }

    return `${baseURL}/${endpoint}?limit=${limit}&offset=${newOffset}`;
}

module.exports = {
    createNextURL,
    createPreviousURL
}