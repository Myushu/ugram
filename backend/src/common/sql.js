const config = require('../common/config')
const logger = require('../common/logger')
const mysql = require('mysql');

var host = config.getSqlConfig('host');
var port = config.getSqlConfig('port');

exports.initSQL = () => {
  var connection = mysql.createConnection({
    host : host,
    port : port,
    user : config.getSqlCredentialsConfig('user'),
    password : config.getSqlCredentialsConfig('password'),
    database : config.getSqlConfig('database'),
  });

  connection.connect( function(err) {
    if (err) {
      logger.error(err.message);
      process.exit()
    } else {
      logger.info("Connection to mysql " + host +
                  ":" + port + " succeed");
    }
  });
}

exports.closeSQLConnection = () => {
  connection.end();
}

// tmp
//   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });
