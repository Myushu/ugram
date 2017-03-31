module.exports = function(app) {

  app.use(function(req, res, next) {
    if (req.method == 'POST' || req.method == 'PUT') {
      if (req.headers['content-type'] == 'application/json'
        || req.headers['content-type'].startsWith('multipart/form-data')) {
          next();
      } else {
        res.status(405).send();
      }
    } else {
      next();
    }
  })
}
