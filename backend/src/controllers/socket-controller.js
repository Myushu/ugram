const service = require('../services/socket-service');

module.exports = function(io) {
  io.on('connection', function(client) {

    // Init the connection
    client.on('join', function(data) {
      service.join(data, client);
    });

    // Disconnect
    client.on('disconnect', function () {
      service.disconnect(client);
    });

    // Send a message
    client.on('message', function(data) {
      service.message(io, client, data);
    });
  });
}
