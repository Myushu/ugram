const service = require('../services/comment-service');

module.exports = function(app) {
    // Create a new hashtag
    app.post('/users/:userId/pictures/:pictureId/comment', (req, res) => {
      service.createComment(req.params.userId, req.params.pictureId, req.body, res, req.user);
    });

    // Delete a hashtag
    app.delete('/users/:userId/pictures/:pictureId/comment/:idComment', (req, res) => {
      service.deleteComment(req.params.userId, req.params.pictureId, req.param('idComment'), res, req.user);
    });
}
