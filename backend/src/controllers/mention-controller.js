const service = require('../services/mention-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Create a new mention
    app.post('/users/:userId/pictures/:pictureId/mention', (req, res) => {
      service.creationMention(req.param('userId'), req.param('pictureId'), req.body, res);
    });

    // Delete a mention
    app.delete('/users/:userId/pictures/:pictureId/mention', (req, res) => {
      service.deleteMention(req.param('userId'), req.param('pictureId'), req.body, res);
    });
}
