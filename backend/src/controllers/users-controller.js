const service = require('../services/users-service');
const orm = require('../common/orm');
const config = require('config');


const jwt    = require('jsonwebtoken');

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

    app.post('/users/login', (req, res) => {
        //checkCreditential => user

        //check creditential and create user object, this object is send to client in the jwt token CF check : https://jwt.io
        var user = {
            email: 'anto26.b@gmail.com',
            id: 42
        };

        //Sign the token and create it
        var token = jwt.sign(user, config.get('jwt')['secret'], {
            expiresIn: 1440
        });

        //Send response to client with token (in future, the token is send on(on ? in ?) the Authorize header)
        res.json({
            success: true,
            message: 'Token !',
            token: token
        });

    });

    app.post('users/logout', (req, res) => {

    });
}
