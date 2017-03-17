const redis = require('redis');
const config = require('config');
const logger = require('./logger');

const redisClient = redis.createClient({
  "host" : config.get("redis")['hostname'],
  "port" : config.get("redis")['port'],
  retry_strategy: function (options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      logger.error(options.error);
      redisClient.quit();
      process.exit();
    }
  }
});

exports.isTokenOnRedis = (token, user, callback) => {
    redisClient.get(token, callback);
}

exports.addToken = (token, userId) => {
  redisClient.set(token, userId);
  redisClient.expire(token, config.get('token')['expire']);
}

exports.removeToken = (token) => {
  redisClient.del(token);
}
