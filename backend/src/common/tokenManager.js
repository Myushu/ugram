const jwt = require('express-jwt');
const config = require('../common/configManager');
const redisToken =  require('./redisToken');

module.exports = function(app) {
  app.use(jwt({
    secret: config.get('JWT_SECRET', 'jwt.secret'),
    credentialsRequired: true,
    getToken: function fromHeaderOrQuerystring (req) {
      return req.cookies.token;
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
    redisToken.isTokenOnRedis(req.cookies.token, req.user, function (err, repplies) {
      if (repplies == req.user.userId)
        next();
      else
        res.status(401).send();
      return ;
    });
  });
}
