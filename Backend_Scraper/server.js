const express = require('express');
const cheerio = require('cheerio');
const scraper = require('./wikipediaScraper');
const app = express();
PORT = 17832;

const EXTRACT_EVENT = 0;
const EXTRACT_PERSON = 1;

console.log(scraper)

app.get('/', function (req, res) {
    res.send(JSON.stringify({Name: 'The man', ID: 3}));
});

app.get('/person', async function (req, res) {
    console.log('req.query = ', req.query);
    try {
        const data = await scraper.getEntity(req.query.name, scraper.parsePerson);
        res.json(JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
});

app.get('/event', async function (req, res) {
    console.log('req.query = ', req.query);
    try {
        const data = await scraper.getEntity(req.query.name, scraper.parseEvent);
        res.json(JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
});

app.get('*', function (req, res) {
    res.send('404 CANT FIND ROUTE');
});

app.listen(PORT, function(){
    console.log('Express started on http://localhost:' + PORT)
});