const service = require('../services/users-pictures-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Get all pictures of a user
    app.get('/users/:userId/pictures', (req, res) => {
      service.getAllPictureByUserId(res, req.params.userId, req.query);
    });

    // Create a new picture
    app.post('/users/:userId/pictures', (req, res) => {
      service.createPicture(req.params.userId, req.body, req.user, res);
    });

    // Delete a picture
    app.delete('/users/:userId/pictures/:pictureId', (req, res) => {
      service.deletePicture(req.params.userId, req.params.pictureId, req.user, res);
    });

    // Get a specific picture
    app.get('/users/:userId/pictures/:pictureId', (req, res) => {
       service.getPictureById(req.params.userId, req.params.pictureId, res);
    });

    // Update a picture
    app.put('/users/:userId/pictures/:pictureId', (req, res) => {
      service.updatePicture(req.params.userId, req.params.pictureId, req.body, req.user, res);
    });
}
