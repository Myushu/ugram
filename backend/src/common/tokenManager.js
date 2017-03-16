const jwt = require('express-jwt');
const config = require('config')

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
  }).unless({path : ['/', '/users/login', '/users/signup', '/users/login/facebook']}));

  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send();
    }
  });
}
