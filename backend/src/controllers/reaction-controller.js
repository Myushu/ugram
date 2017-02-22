const service = require('../services/reaction-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Create a new reaction
    app.post('/users/:userId/pictures/:pictureId/reaction', (req, res) => {
      service.creationReaction(req.param('userId'), req.param('pictureId'), req.user, res);
    });

    // Delete a reaction
    app.delete('/users/:userId/pictures/:pictureId/reaction', (req, res) => {
      service.deleteReaction(req.param('userId'), req.param('pictureId'), req.user, res);
    });
}
