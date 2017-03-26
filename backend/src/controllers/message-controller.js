const service = require('../services/message-service');

module.exports = function(app) {
  // Get all message with the given user
    app.get('/users/:idUser/message', (req, res) => {
      service.getAllMessage(res, req.user, req.params.idUser, req.query);
    });
}
