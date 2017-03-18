const service = require('../services/search-service');

module.exports = function(app) {
    // Search by description
    app.get('/search/description', (req, res) => {
      service.searchDescription(req.query, res);
    })

    // Search by hastag
    app.get('/search/hastag', (req, res) => {
      service.searchHashtag(req.query, res);
    })

    // Search by user
    app.get('/search/users', (req, res) => {
      service.searchUser(req.query, res);
    })
}
