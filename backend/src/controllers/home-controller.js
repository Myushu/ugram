const service = require('../services/home-service');
const config = require('../common/configManager');

module.exports = function(app) {
    // Get the default page
    app.get('/', (req, res) => {
      res.redirect(config.get('CLIENT_URL', 'client.url'));
    });
}
