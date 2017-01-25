const service = require('../services/users-service');

module.exports = function(app) {

    app.get('/users', (req, res) => {
        return res.send(service.getUsers());
    });

    app.get('/users/:id', (req, res) => {
        return res.send(service.getUsersById());
    });

    app.post('/users/:id', (req, res) => {
        return res.send(service.postUsersById());
    });
}
