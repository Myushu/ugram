const config = require('../common/configManager');

module.exports = function(app) {
  // Get the default page
  app.get('/', (req, res) => {
    res.writeHead(301,
      { Location: config.get('CLIENT_URL', 'client.url') }
    );
    res.send();
  });
}
