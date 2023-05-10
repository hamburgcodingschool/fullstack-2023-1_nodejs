const express = require("express");
const app = express();

const port = 3000;

// so that express knows to expect POST body information to be in JSON format
app.use(express.json());

app.get("/", function(req, res) {
    console.log("YAY!!!!");
    res.json({
        status: "OK",
        message: "Hello there!"
    });
});

// Post body can be of types:
// FORM URL ENCODED (Old school, works with legacy HTML forms...)
// JSON
// MultiPart Form Data (Used for files, this is how we upload)
app.post("/", function(req, res) {
    
    console.log("YAY A POST, WHOOP DEE DOO!!!!");

    console.log(req.body);

    res.json({
        status: "OK",
        message: "You tried to post, good for you"
    });
});

app.listen(port, function() {
    console.log(`Listening on ${3000}`);
})