const express = require("express");
const cheerio = require("cheerio");
const app = express();
const scraper = require('./wikipediaScraper');

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

app.listen(3000, function () {
    console.log("Server is running on localhost:3000");
});