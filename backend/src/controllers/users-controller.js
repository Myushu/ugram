 const service = require('../services/users-service');

module.exports = function(app) {
    // Get all users
    app.get('/users', (req, res) => {
      service.getAllUsers(req.query, res);
    });

    // Get a user
    app.get('/users/:id', (req, res) => {
      service.getUsersById(req.params.id, req.user, res);
    });

    // Create a new user
    app.post('/users/signup', (req, res) => {
       service.createUser(req.body, res);
    });

    // Update a user
    app.put('/users/:id', (req, res) => {
      service.updateUser(req.body, req.params.id, req.user, res);
    });

    // Delete a user
    app.delete('/users/:id', (req, res) => {
      service.deleteUser(req.params.id, req.user, req, res);
    });

    // Log in
    app.post('/users/login', (req, res) => {
      service.authentification(req, res);
    });

    // Log in Facebook
    app.post('/users/login/facebook', (req, res) => {
      service.authentificationFacebook(req, res);
    });

    //Log out
    app.post('/users/logout', (req, res) => {
      service.logout(req, res);
    });
}
