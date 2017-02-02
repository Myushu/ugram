const service = require('../services/picture-service');
const orm = require('../common/orm');

module.exports = function(app) {

  // Get all pictures
    app.get('/pictures', (req, res) => {
      service.getAllPictures(res, req.query.perPage, req.query.page);
    });
}
