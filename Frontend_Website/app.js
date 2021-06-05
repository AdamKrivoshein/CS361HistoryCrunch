var express = require('express');
var mysql = require('./dbcon')
var app = express();
app.use(express.static('public'));
app.use(express.json());
app.set('port', 26678);
const scoresQuery = 'SELECT id, numbercorrect, numberofquestions FROM `finaltab` ORDER BY (numbercorrect / numberofquestions) DESC';

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:26678/');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.static('public'))

app.get('/', function (req, res) {
});

app.get('/scores', function (req, res) {
    mysql.pool.query(scoresQuery, function (err, receivedData) {
        if (err) {
            console.log(err)
            throw err}
        console.log('receivedData = ', receivedData);
        console.log(receivedData[1].percentage);
        let obj = {prop1: "asdf", prop2: 3};
        res.json(JSON.stringify(receivedData));
    });
});

// Delete request for rows
app.delete('/:id', function (req, res) {
    const id = Number(req.params.id);
    mysql.pool.query('DELETE FROM `finaltab` WHERE id = ?;', [id], function (err, rows) {
        if (err) {
            console.log(err)
            throw err}
    });
});

app.use(function (req, res) {
});

app.listen(app.get('port'), function () {
    console.log('Located http://localhost:' + app.get('port') + ';');
});