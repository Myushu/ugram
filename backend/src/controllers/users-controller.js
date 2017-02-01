const service = require('../services/users-service');
const sequelizeHandlers = require('sequelize-handlers');
const orm = require('../common/orm');
const userModel = orm.getSequelize().import("../models/USER.js")

module.exports = function(app) {

    // Get all users
    app.get('/users', sequelizeHandlers.query(userModel));

    // Get a user
    app.get('/users/:id', sequelizeHandlers.get(userModel));

    // Create a new user
    app.post('/users', sequelizeHandlers.create(userModel));

    // Update a user
    app.put('/users/:id', sequelizeHandlers.update(userModel));

    // Delete a user
    app.delete('/user/:id', sequelizeHandlers.remove(userModel));

}
