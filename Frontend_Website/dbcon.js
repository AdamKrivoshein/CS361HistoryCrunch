var mysql = require('mysql2');
const util = require('util');

var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'yesthisisapassword',
    database        : 'HighScores'
});

// Makes query return a promise so async and await can be used for multi query operations.
const query = util.promisify(pool.query).bind(pool);    // TODO: Redundant already promise

module.exports.query = query;
module.exports.pool = pool;