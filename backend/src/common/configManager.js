const config = require('config');

exports.get = (envName, configPath, defaultValue) => {
  try {
    return process.env[envName] || config.get(configPath);
  } catch (e) {
    console.log('WARNING : using default value for : ' + envName);
    return defaultValue;
  }
}
