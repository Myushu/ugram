const service = require('../services/picture-service');
const orm = require('../common/orm');

module.exports = function(app) {

  // Get all pictures
    app.get('/pictures', (req, res) => {
      service.getAllPictures(res, req.query);
    });

    // Get the picture file
    app.get('/picture/:picturePath', (req, res) => {
      service.getPicture(req.params.picturePath, res);
    });
}
