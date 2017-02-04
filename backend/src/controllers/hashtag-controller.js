const service = require('../services/hashtag-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Create a new hashtag
    app.post('/users/:userId/pictures/:pictureId/hashtag', (req, res) => {
      service.creationHashtag(req.param('userId'), req.param('pictureId'), req.body, res);
    });

    // Delete a hashtag
    app.delete('/users/:userId/pictures/:pictureId/hashtag', (req, res) => {
      service.deleteHashtag(req.param('userId'), req.param('pictureId'), req.body, res);
    });
}
