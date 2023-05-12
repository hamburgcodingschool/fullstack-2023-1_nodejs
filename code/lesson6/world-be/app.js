const express = require("express");
const cors = require("cors");
const app = express();

const cityController = require("./controllers/cityController");
const countryController = require("./controllers/countryController");

const port = 3000;

app.use(cors());

app.get("/api/cities", cityController.getCities);
app.get("/api/cities/:countryCode", cityController.getCitiesByCountry);

app.post("/api/cities", cityController.postCity);
app.delete("/api/cities", cityController.postCity);

app.get("/api/countries", countryController.getCountries);
app.post("/api/countries", countryController.postCountry);
app.delete("/api/countries", countryController.deleteCountry);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});