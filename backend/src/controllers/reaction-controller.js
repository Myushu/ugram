const service = require('../services/reaction-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Create a new reaction
    app.post('/users/:userId/pictures/:pictureId/reaction', (req, res) => {
      service.creationReaction(req.params.userId, req.params.pictureId, req.user, res);
    });

    // Delete a reaction
    app.delete('/users/:userId/pictures/:pictureId/reaction', (req, res) => {
      service.deleteReaction(req.params.userId, req.params.pictureId, req.user, res);
    });
}
