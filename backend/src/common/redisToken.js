const redis = require('redis');
const config = require('config');
// const tokenManager = require('./tokenManger');

// const redisClient = redis.createClient({
//   "host" : config.get("redis")['hostname'],
//   "port" : config.get("redis")['port']
// });

// module.exports = function(app) {
//   app.use(function (req, res, next) {
//     if (!req.user)
//       next();
//     else if (isTokenOnRedis){
//
//     }
//   });
// }
//
// function isTokenOnRedis (token) {

}

exports.addTokenToRedis = (token, userId) => {
  redisClient.multi();
}

// function to add token :
//  transation on
//  add token : user_id
//  set time out
//  transation off

//
// // funcftion to remove token
// // delete token/
