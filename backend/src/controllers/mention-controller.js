const service = require('../services/mention-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Create a new mention
    app.post('/users/:userId/pictures/:pictureId/mention', (req, res) => {
      service.creationMention(req.params.userId, req.params.pictureId, req.body, req.user, res);
    });

    // Delete a mention
    app.delete('/users/:userId/pictures/:pictureId/mention', (req, res) => {
      service.deleteMention(req.params.userId, req.params.pictureId, req.body, req.user, res);
    });
}
