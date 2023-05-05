const express = require("express");
const app = express();

const port = 3000;

app.get("/", function(req, res) {

    const videoId = req.query.v;
    const name = req.query.name;

    console.log(req.query);

    res.send(`The video you want to watch is ${videoId}`);
});


app.listen(port, function() {
    console.log(`Listening on ${port}`);
});