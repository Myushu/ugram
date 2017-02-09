const service = require('../services/users-pictures-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Get all pictures of a user
    app.get('/users/:userId/pictures', (req, res) => {
      service.getAllPictureByUserId(res, req.param('userId'), req.query);
    });

    // Create a new picture
    app.post('/users/:userId/pictures', (req, res) => {
      service.createPicture(req.param('userId'), req.body, res);
    });

    // Delete a picture
    app.delete('/users/:userId/pictures/:pictureId', (req, res) => {
      service.deletePicture(req.param('userId'), req.param('pictureId'), res);
    });

    // Get a specific picture
    app.get('/users/:userId/pictures/:pictureId', (req, res) => {
       service.getPictureById(req.param('userId'), req.param('pictureId'), res);
    });

    // Update a picture
    app.put('/users/:userId/pictures/:pictureId', (req, res) => {
      service.updatePicture(req.param('userId'), req.param('pictureId'), req.body, res);
    });
}
