const redis = require('redis');
const config = require('../common/configManager');
const logger = require('./logger');

const redisClient = redis.createClient({
  "host" : config.get('REDIS_HOSTNAME', 'redis.hostname', 'localhost'),
  "port" : config.get('REDIS_PORT', 'redis.port', 6379),
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
  redisClient.set(token, userId,  function (err, replies) {
    redisClient.expire(token, config.get('TOKEN_EXPIRE', 'token.expire'));
  });
}

exports.removeToken = (token) => {
  redisClient.del(token);
}
