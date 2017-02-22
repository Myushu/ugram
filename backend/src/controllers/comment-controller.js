const service = require('../services/comment-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Create a new hashtag
    app.post('/users/:userId/pictures/:pictureId/comment', (req, res) => {
      service.createComment(req.param('userId'), req.param('pictureId'), req.body, res, req.user);
    });

    // Delete a hashtag
    app.delete('/users/:userId/pictures/:pictureId/comment/:idComment', (req, res) => {
      service.deleteComment(req.param('userId'), req.param('pictureId'), req.param('idComment'), res, req.user);
    });
}
