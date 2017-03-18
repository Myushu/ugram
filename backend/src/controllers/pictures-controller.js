const service = require('../services/picture-service');

module.exports = function(app) {

  // Get all pictures
    app.get('/pictures', (req, res) => {
      service.getAllPictures(res, req.query);
    });

    // Get the picture file
    app.get('/picture', (req, res) => {
      service.getPicture(req.query.filename, res);
    });
}
