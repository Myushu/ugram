const Sequelize = require('sequelize');
const logger = require('./logger');
const config = require('./config')

var sequelize = new Sequelize({
  username : config.getSqlCredentialsConfig('user'),
  password : config.getSqlCredentialsConfig('password'),
  database : config.getSqlConfig('database'),
  host: config.getSqlConfig('host'),
  port : config.getSqlConfig('port'),
  dialect: 'mysql',
});

exports.initConnection = () => {
  sequelize.query("SELECT 1", { type: sequelize.QueryTypes.SELECT })
    .catch(function(err) {
      logger.error(err.message);
      process.exit();
  });
}

exports.getSequelize = () => {
  return sequelize;
}
