const service = require('../services/picture-service');
const orm = require('../common/orm');

module.exports = function(app) {

  // Get all pictures
    app.get('/pictures', (req, res) => {
      service.getAllPictures(res, req.query);
    });

    // Get the picture file
    app.get('/picture', (req, res) => {
      service.getPicture(req.query.filename, res);
    });

    // Search picture
    app.get('/pictures/search', (req, res) => {
      service.searchPicture(req.query, res);
    })
}
