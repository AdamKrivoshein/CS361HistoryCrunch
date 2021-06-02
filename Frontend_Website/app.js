var express = require('express');
var mysql = require('./dbcon')
var app = express();
app.use(express.static('public'));
app.use(express.json());
app.set('port', 26678);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:26678/");
    // res.header("Access-Control-Allow-Origin", "file:///F:/OSU/CS361/Project/Frontend_Website/index.html");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(express.static('public'))

app.get('/', function (req, res) {
    // res.render('home');
});

app.get('/scores', function (req, res) {
    mysql.pool.query("SELECT * FROM `finaltab` LIMIT 1000;", function (err, receivedData) {
        if (err) {
            console.log(err)
            throw err}
        console.log('receivedData = ', receivedData);
        //res.render('players', {data: rows});
        let obj = {prop1: "asdf", prop2: 3}
        // res.setHeader("Access-Control-Allow-Origin", "file:///F:/OSU/CS361/Project/Frontend_Website/index.html");
        // res.header("Access-Control-Allow-Origin", "*");
        res.json(JSON.stringify(obj))
    });
});

app.use(function (req, res) {
    // res.status(404);
    // res.send('404');
});

app.listen(app.get('port'), function () {
    console.log('Located http://localhost:' + app.get('port') + ';');
});