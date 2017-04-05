const logger = require("../common/logger");

const clients = [];
const sockets = [];
const pseudoList = []

module.exports.addClient = (clientId, pseudo, socket) => {
  if (clients[clientId] === undefined)
    clients[clientId] = [];
  clients[clientId][socket.id] = socket;
  sockets[socket.id] = clientId
  pseudoList[clientId] = pseudo;
  logger.info('User ' +  clientId + ' is now connected');
}

module.exports.removeClient = (socket) => {
  var userId = sockets[socket.id];
  logger.info('User ' +  userId + ' is now disconnected');
  if (userId != undefined) {
    delete clients[userId][socket.id];
    delete sockets[socket.id];
  }
}

function sendMessageToClient(clientId, messageType, message) {
  for (var socket in clients[clientId]) {
    clients[clientId][socket].emit(messageType, message);
  }
}

module.exports.notifyClient = (clientId, messageType, message) => {
  if (clients[clientId] != undefined)
    sendMessageToClient(clientId, messageType, message)
}

module.exports.broadcast = (socket, messageType, message) => {
  socket.broadcast.emit(messageType, message);
}

module.exports.getClientId = (socket) => {
  var userId = sockets[socket.id];
  return {
    USER_ID : userId,
    PSEUDO : pseudoList[userId]
  };
}
