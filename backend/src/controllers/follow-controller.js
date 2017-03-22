const service = require('../services/follow-service');

module.exports = function(app) {
    // Follow someone
    app.post('/users/:userId/follow', (req, res) => {
      service.follow(req.params.userId, req.user, res);
    });

    // Unfollow someone
    app.delete('/users/:userId/follow', (req, res) => {
      service.unfollow(req.params.userId, req.user, res);
    });
}
