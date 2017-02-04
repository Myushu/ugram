const service = require('../services/users-service');
const orm = require('../common/orm');

module.exports = function(app) {
    // Get all users
    app.get('/users', (req, res) => {
      service.getAllUsers(res);
    });

    // Get a user
    app.get('/users/:id', (req, res) => {
      service.getUsersById(req.param('id') ,res);
    });

    // Create a new user
    app.post('/users', (req, res) => {
       service.createUser(req.body, res);
    });

    // Update a user
    app.put('/users/:id', (req, res) => {
      service.updateUser(req.body, req.param('id'), res);
    });

    // Delete a user
    app.delete('/users/:id', (req, res) => {
      service.deleteUser(req.param('id'), res);
    });
}
