const service = require('../services/home-service');

module.exports = function(app) {
    // Get the default page
    app.get('/', (req, res) => {
        return res.send(service.getHome());
    });
}
