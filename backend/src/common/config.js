const logger = require('../common/logger')
const config = require('config');

var sqlConfig = config.get('sql');
var sqlCredentialsConfig = sqlConfig.get('credentials');

exports.getSqlConfig = (param) => {
  if (config.has("sql." + param)) {
    return config.get("sql." + param);
  } else {
    logger.error("Invalid config file. Value '" + param + "' not found");
  }
}

exports.getSqlCredentialsConfig = (param) => {
  if (sqlCredentialsConfig.has(param)) {
    return sqlCredentialsConfig.get(param);
  } else {
    logger.error("Invalid config file. Value '" + param + "' not found");
  }
}
