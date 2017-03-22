const service = require('../services/home-service');

const orm = require('../common/orm')

module.exports = function(app) {
    // Get the default page
    app.get('/', (req, res) => {
      return res.send(service.getHome());
    });
}
