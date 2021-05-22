const express = require("express");
const cheerio = require("cheerio");
const scraper = require('./wikipediaScraper');
const app = express();
PORT = 17832;

console.log(scraper)

app.get("/", function (req, res) {
    res.send(JSON.stringify({Name: "The man", ID: 3}));
});

app.get("/person", async function (req, res) {
    console.log("req.query = ", req.query);
    try {
        const data = await scraper.getPerson(req.query.name);
        res.json(JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
});

app.get("/event", async function (req, res) {
    console.log("req.query = ", req.query);
    try {
        const data = await scraper.getEvent(req.query.name);
        res.json(JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
});

app.get("*", function (req, res) {
    res.send("404 CANT FIND ROUTE");
});

app.listen(PORT, function(){            // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
    console.log('Express started on http://localhost:' + PORT)
});