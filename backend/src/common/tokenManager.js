const jwt = require('express-jwt');
const config = require('config');
const redisToken =  require('./redisToken');

module.exports = function(app) {
  app.use(jwt({
    secret: config.get('jwt')['secret'],
    credentialsRequired: true,
    getToken: function fromHeaderOrQuerystring (req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
  }).unless({path : ['/', '/users/login', '/users/signup', '/users/login/facebook', '/picture']}));

  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send();
    }
  });

  // check if user's token is on redis database
  app.use(function (req, res, next) {
    if (!req.user) {
      next();
      return ;
    }
    redisToken.isTokenOnRedis(req.headers.authorization.split(' ')[1], req.user, function (err, repplies) {
      if (repplies == req.user.userId)
        next();
      else
        res.status(401).send();
      return ;
    });
  });
}
