const service = require('../services/hashtag-service');

module.exports = function(app) {
    // Create a new hashtag
    app.post('/users/:userId/pictures/:pictureId/hashtag', (req, res) => {
      service.creationHashtag(req.params.userId, req.params.pictureId, req.body, req.user, res);
    });

    // Delete a hashtag
    app.delete('/users/:userId/pictures/:pictureId/hashtag', (req, res) => {
      service.deleteHashtag(req.params.userId, req.params.pictureId, req.body, req.user, res);
    });
}
