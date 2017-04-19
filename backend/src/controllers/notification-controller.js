const service = require('../services/notification-service');

module.exports = function(app) {
  // Get all pictures
  app.get('/notification', (req, res) => {
    service.getAllNotificationById(res, req.user, req.query);
  });
}
