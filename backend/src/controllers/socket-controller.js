const service = require('../services/socket-service');

module.exports = function(io) {
  io.on('connection', function(client) {

    // Init the connection
    client.on('join', function(data) {
      service.join(data);
    });

    // Disconnect
    client.on('disconnect', function () {
      service.join(client);
    });

    // Send a message
    client.on('message', function(data) {
      service.message(client, data);
    });
  });
}
