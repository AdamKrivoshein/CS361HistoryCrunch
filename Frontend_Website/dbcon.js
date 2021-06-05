var mysql = require('mysql2');
const util = require('util');

var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'yesthisisapassword',
    database        : 'HighScores'
});

// Makes query return a promise so async/await can be used for multiple queries.
const query = util.promisify(pool.query).bind(pool);

module.exports.query = query;
module.exports.pool = pool;