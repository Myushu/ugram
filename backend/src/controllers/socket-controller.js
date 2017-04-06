const service = require('../services/socket-service');
const cookieParser = require('socket.io-cookie');

module.exports = function(io) {
  service.init(io);
  io.use(cookieParser);

  io.on('connection', function(client) {
    service.connect(client);

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
