const service = require('../services/home-service');

module.exports = function(app) {

    app.get('/', (req, res) => {
        return res.send(service.getHome());
    });
}
